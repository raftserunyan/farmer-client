import React from 'react';
import { Button, Input } from 'ui';
import { Formik } from 'formik';

import { Filter } from 'components';
import * as S from './FiltersList.styles';
import { initialValues } from './FiltersList.config';
import { useSearchParams } from 'hooks/useSearchParams';
import { useDispatch } from 'react-redux';
import { loadProducts } from 'redux/actions/products';
import { constructRafikFilters } from 'helpers/rafik';

export const FiltersList = ({ hideModal }) => {
	const dispatch = useDispatch();
	const [searchParams, updateSearchParams] =
		useSearchParams();

	const search = values => {
		hideModal();
		dispatch(loadProducts(constructRafikFilters(values)));
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
									value={values.name}
									placeholder='Անուն'
									onChange={val =>
										setFieldValue('name', val)
									}
									onEnter={handleSubmit}
									autoFocus
								/>
								<Input
									value={values.priceKg}
									placeholder='Գին'
									onChange={val =>
										setFieldValue('priceKg', val)
									}
									onEnter={handleSubmit}
								/>
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
