import React, { useEffect } from 'react';
import { Button, DatePicker, Input, Select } from 'ui';
import { Formik } from 'formik';

import { Filter } from 'components';
import * as S from './FiltersList.styles';
import { initialValues } from './FiltersList.config';
import { useDispatch, useSelector } from 'react-redux';
import { constructRafikFilters } from 'helpers/rafik';
import { useSearchParams } from 'hooks/useSearchParams';
import { loadInvestors } from 'redux/actions/investors';
import { loadInvestments } from 'redux/actions/investments';
import { loadTargets } from 'redux/actions/targets';
import { loadExpenses } from 'redux/actions/expenses';
import { loadCustomers } from 'redux/actions/customers';
import { loadProducts } from 'redux/actions/products';
import { loadSales } from 'redux/actions/sales';

export const FiltersList = ({ hideModal }) => {
	const dispatch = useDispatch();
	const customers = useSelector(state => state.customers);
	const products = useSelector(state => state.products);
	const [searchParams, updateSearchParams] =
		useSearchParams();

	useEffect(() => {
		if (!products.loaded)
			dispatch(
				loadProducts({
					pageNumber: 1,
					pageSize: 100000,
				})
			);

		if (!customers.loaded)
			dispatch(
				loadCustomers({
					pageNumber: 1,
					pageSize: 100000,
				})
			);
	});

	const search = values => {
		hideModal();
		dispatch(
			loadSales(
				constructRafikFilters({
					productId: values.productId,
					priceKG: values.priceKG,
					weight: values.weight,
					customerId: values.customerId,
					paid: values.paid,
					date: {
						start: values.startDate,
						end: values.endDate,
					},
				})
			)
		);
		updateSearchParams(values);
	};

	return (
		<Filter>
			<Formik
				onSubmit={search}
				initialValues={searchParams || initialValues}
			>
				{({
					values,
					resetForm,
					handleSubmit,
					setFieldValue,
				}) => {
					const selectedCustomer = customers.list.find(
						customer => customer.id === +values.customerId
					);
					const selectedProduct = products.list.find(
						product => product.id === +values.productId
					);

					return (
						<S.FiltersListContainer>
							<S.List>
								<Select
									value={selectedProduct}
									options={products.list}
									placeholder='Ապրանք'
									onChange={val => {
										setFieldValue(
											'product',
											products.list.find(
												product => product.id === val?.value
											)
										);
										setFieldValue('productId', val?.value);
									}}
								/>
								<Input
									value={values.weight}
									placeholder='Քաշ'
									onChange={val =>
										setFieldValue('weight', val)
									}
									onEnter={handleSubmit}
								/>
								<Input
									value={values.priceKG}
									placeholder='Գին (կգ)'
									onChange={val =>
										setFieldValue('priceKG', val)
									}
									onEnter={handleSubmit}
								/>
								<Select
									value={selectedCustomer}
									options={customers.list}
									placeholder='Հաճախորդ'
									onChange={val => {
										setFieldValue(
											'customer',
											customers.list.find(
												customer =>
													customer.id === val?.value
											)
										);
										setFieldValue('customerId', val?.value);
									}}
								/>
								<Input
									value={values.paid}
									placeholder='Վճարված գումար'
									onChange={val =>
										setFieldValue('paid', val)
									}
									onEnter={handleSubmit}
								/>
								<S.RowContainer>
									<DatePicker
										placeholder='Ամսաթիվ սկիզբ'
										date={values.startDate}
										onChange={val =>
											setFieldValue('startDate', val)
										}
									/>
									<DatePicker
										placeholder='Ամսաթիվ ավարտ'
										className='Custom-Position'
										date={values.endDate}
										onChange={val =>
											setFieldValue('endDate', val)
										}
									/>
								</S.RowContainer>
							</S.List>
							<S.ActionsContainer>
								<Button
									className='bordered'
									onClick={() => {
										resetForm();
										updateSearchParams({});
										search({});
									}}
								>
									Մաքրել
								</Button>
								<Button onClick={handleSubmit}>
									Փնտրել
								</Button>
							</S.ActionsContainer>
						</S.FiltersListContainer>
					);
				}}
			</Formik>
		</Filter>
	);
};
