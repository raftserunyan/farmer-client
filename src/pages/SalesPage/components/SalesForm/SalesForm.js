import React, { useEffect, useMemo } from 'react';

import * as S from './SalesForm.styles';
import closeIcon from 'images/close.png';
import { Input, Button, Select, DatePicker } from 'ui';
import { Formik } from 'formik';
import {
	initialValues,
	validationSchema,
} from './SalesForm.config';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from 'redux/actions/products';
import { loadCustomers } from 'redux/actions/customers';

export const SalesForm = ({
	hideModal,
	editSale,
	createSale,
	editableData,
}) => {
	const { products, customers } = useSelector(state => ({
		sales: state.sales,
		products: state.products,
		customers: state.customers,
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		if (!products.loaded)
			dispatch(
				loadProducts({
					pageSize: 100000,
					pageNumber: 1,
				})
			);
		if (!customers.loaded)
			dispatch(
				loadCustomers({
					pageSize: 100000,
					pageNumber: 1,
				})
			);
	}, []);

	const formActionType = useMemo(
		() => (editableData ? 'Փոփոխել' : 'Ավելացնել'),
		[editableData]
	);

	const onSubmit = values => {
		if (editableData) {
			editSale(values);
		} else {
			createSale(values);
		}

		hideModal();
	};
	return (
		<S.SalesFormContainer>
			<S.FormHeaderContainer>
				<S.HeaderTitle>
					{formActionType} վաճառք
				</S.HeaderTitle>
				<S.CloseFormContainer onClick={hideModal}>
					<S.CloseFormIcon src={closeIcon} />
				</S.CloseFormContainer>
			</S.FormHeaderContainer>
			<Formik
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				initialValues={editableData || initialValues}
			>
				{({
					values,
					errors,
					touched,
					handleSubmit,
					setFieldValue,
				}) => {
					const selectedProduct = products.list.find(
						item => item.id === values.productId
					);
					const selectedCustomer = customers.list.find(
						item => item.id === values.customerId
					);

					return (
						<S.FormContentContainer>
							<S.FormItem>
								<Select
									value={selectedProduct}
									options={products.list}
									placeholder='Ապրանք'
									autoFocus
									onChange={val => {
										setFieldValue('productId', val?.value);
										const product = products.list.find(
											item => item.id === val?.value
										);

										if (product?.priceKG)
											setFieldValue(
												'priceKG',
												product.priceKG
											);
									}}
								/>
								{errors.productId && touched.productId && (
									<S.ErrorMessage>
										{errors.productId}
									</S.ErrorMessage>
								)}
							</S.FormItem>
							<Input
								value={values.weight}
								placeholder='Քաշ'
								onChange={val =>
									setFieldValue('weight', val)
								}
								onEnter={handleSubmit}
								error={touched.weight && errors.weight}
							/>
							<Input
								value={values.priceKG}
								placeholder='Գին (կգ)'
								onChange={val =>
									setFieldValue('priceKG', val)
								}
								onEnter={handleSubmit}
								error={touched.priceKG && errors.priceKG}
							/>
							<S.FormItem>
								<DatePicker
									placeholder='Ամսաթիվ'
									date={values.date}
									onChange={val =>
										setFieldValue('date', val)
									}
								/>
							</S.FormItem>
							<S.FormItem>
								<Select
									value={selectedCustomer}
									options={customers.list}
									placeholder='Հաճախորդ'
									onChange={val => {
										setFieldValue('customerId', val?.value);
									}}
								/>
								{errors.productId && touched.productId && (
									<S.ErrorMessage>
										{errors.productId}
									</S.ErrorMessage>
								)}
							</S.FormItem>
							<Input
								value={values.payed}
								placeholder='Վճարված գումար'
								onChange={val =>
									setFieldValue('payed', val)
								}
								onEnter={handleSubmit}
								error={touched.payed && errors.payed}
							/>
							<S.ButtonsContainer>
								<Button
									className='bordered'
									onClick={hideModal}
								>
									Չեղարկել
								</Button>
								<Button onClick={handleSubmit}>
									Հաստատել
								</Button>
							</S.ButtonsContainer>
						</S.FormContentContainer>
					);
				}}
			</Formik>
		</S.SalesFormContainer>
	);
};
