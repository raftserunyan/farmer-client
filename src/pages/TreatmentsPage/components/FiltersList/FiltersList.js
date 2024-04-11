import React from 'react';
import { Button, Input } from 'ui';
import { Formik } from 'formik';

import { Filter } from 'components';
import * as S from './FiltersList.styles';
import { initialValues } from './FiltersList.config';
import { useSearchParams } from 'hooks/useSearchParams';
import { loadTreatments } from 'redux/actions/treatments';
import { useDispatch } from 'react-redux';

export const FiltersList = ({ hideModal }) => {
	const dispatch = useDispatch();
	const [searchParams, updateSearchParams] =
		useSearchParams();

	const search = values => {
		hideModal();
		if (!values) {
			dispatch(
				loadTreatments({
					pageNumber: 1,
					pageSize: 6,
				})
			);
		} else {
			dispatch(
				loadTreatments({
					pageNumber: 1,
					pageSize: 6,
					andFilters: Object.keys(values).map(key => ({
						property: key,
						value: values[key],
						operation: 'like',
					})),
				})
			);
		}

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
							</S.List>
							<S.ActionsContainer>
								<Button
									className='bordered'
									onClick={() => {
										resetForm();
										search();
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
