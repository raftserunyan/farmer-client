import React, { useEffect } from 'react';
import { Button, DatePicker, Input, Select } from 'ui';
import { Formik } from 'formik';

import { Filter } from 'components';
import * as S from './FiltersList.styles';
import { initialValues } from './FiltersList.config';
import { useDispatch } from 'react-redux';
import { constructRafikFilters } from 'helpers/rafik';
import { useSearchParams } from 'hooks/useSearchParams';
import { loadTreatments } from 'redux/actions/treatments';

export const FiltersList = ({ hideModal }) => {
	const dispatch = useDispatch();
	const [searchParams, updateSearchParams] =
		useSearchParams();

	const search = values => {
		hideModal();
		dispatch(
			loadTreatments(
				constructRafikFilters({
					drugName: values.drugName,
					drugAmount: values.drugAmount,
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
					return (
						<S.FiltersListContainer>
							<S.List>
								<Input
									value={values.drugName}
									placeholder='Անվանում'
									onChange={val =>
										setFieldValue('drugName', val)
									}
									onEnter={handleSubmit}
									autoFocus
								/>
								<Input
									value={values.drugAmount}
									placeholder='Քանակ'
									onChange={val =>
										setFieldValue('drugAmount', val)
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
