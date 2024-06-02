import React from 'react';
import { Button, Input } from 'ui';
import { Formik } from 'formik';

import { Filter } from 'components';
import * as S from './FiltersList.styles';
import { initialValues } from './FiltersList.config';
import { useDispatch } from 'react-redux';
import { constructRafikFilters } from 'helpers/rafik';
import { useSearchParams } from 'hooks/useSearchParams';
import { loadCustomers } from 'redux/actions/customers';

export const FiltersList = ({ hideModal }) => {
	const dispatch = useDispatch();
	const [searchParams, updateSearchParams] =
		useSearchParams();

	const search = values => {
		hideModal();
		dispatch(
			loadCustomers(
				constructRafikFilters(values, {
					stringFields: [
						'hvhh',
						'accountNumber',
						'phoneNumber',
					],
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
									value={values.name}
									placeholder='Անուն'
									onChange={val =>
										setFieldValue('name', val)
									}
									onEnter={handleSubmit}
									autoFocus
								/>
								<Input
									value={values.address}
									placeholder='Հասցե'
									onChange={val =>
										setFieldValue('address', val)
									}
									onEnter={handleSubmit}
								/>
								<Input
									value={values.phoneNumber}
									placeholder='Հեռախոսահամար'
									onChange={val =>
										setFieldValue('phoneNumber', val)
									}
									onEnter={handleSubmit}
								/>
								<Input
									value={values.accountNumber}
									placeholder='Հաշվեհամար'
									onChange={val =>
										setFieldValue('accountNumber', val)
									}
									onEnter={handleSubmit}
								/>
								<Input
									value={values.hvhh}
									placeholder='ՀՎՀՀ'
									onChange={val =>
										setFieldValue('hvhh', val)
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
