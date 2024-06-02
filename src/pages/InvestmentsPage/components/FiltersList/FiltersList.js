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

export const FiltersList = ({ hideModal }) => {
	const dispatch = useDispatch();
	const investors = useSelector(state => state.investors);
	const [searchParams, updateSearchParams] =
		useSearchParams();

	useEffect(() => {
		if (!investors.loaded)
			dispatch(
				loadInvestors({
					pageNumber: 1,
					pageSize: 100000,
				})
			);
	});

	const search = values => {
		hideModal();
		dispatch(
			loadInvestments(
				constructRafikFilters({
					amount: values.amount,
					investorId: values.investorId,
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
					const selectedInvestor = investors.list.find(
						investor => investor.id === +values.investorId
					);
					return (
						<S.FiltersListContainer>
							<S.List>
								<Input
									value={values.amount}
									placeholder='Գումար'
									onChange={val =>
										setFieldValue('amount', val)
									}
									onEnter={handleSubmit}
									autoFocus
								/>
								<Select
									value={selectedInvestor}
									options={investors.list}
									placeholder='Ներդրող'
									onChange={val => {
										setFieldValue(
											'investor',
											investors.list.find(
												investor =>
													investor.id === val?.value
											)
										);
										setFieldValue('investorId', val?.value);
									}}
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
