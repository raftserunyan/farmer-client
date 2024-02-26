import React, { useEffect, useMemo } from 'react';

import * as S from './TreatmentForm.styles';
import closeIcon from 'images/close.png';
import { Input, Button, Select, DatePicker } from 'ui';
import { Formik } from 'formik';
import {
	initialValues,
	validationSchema,
} from './TreatmentForm.config';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from 'redux/actions/products';
import { loadMeasurementUnits } from 'redux/actions/measurementUnits';
import { measurementUnits } from 'redux/reducers/measurementUnits';
import { omit } from 'lodash';

export const TreatmentForm = ({
	hideModal,
	editTreatment,
	createTreatment,
	editableData,
}) => {
	const products = useSelector(state => state.products);
	const measurementUnits = useSelector(
		state => state.measurementUnits
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!measurementUnits.loaded)
			dispatch(
				loadMeasurementUnits({
					pageNumber: 1,
					pageSize: 100000,
				})
			);
		if (!products.loaded)
			dispatch(
				loadProducts({
					pageNumber: 1,
					pageSize: 100000,
				})
			);
	}, []);

	const formActionType = useMemo(
		() => (editableData ? 'Փոփոխել' : 'Ավելացնել'),
		[editableData]
	);

	const onSubmit = values => {
		const valuesFormatted = omit(values, [
			'treatedProducts',
		]);

		if (editableData) {
			editTreatment(valuesFormatted);
		} else {
			createTreatment(valuesFormatted);
		}

		hideModal();
	};
	return (
		<S.TreatmentFormContainer>
			<S.FormHeaderContainer>
				<S.HeaderTitle>
					{formActionType} բուժում
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
					const selectedMeasurementUnit =
						measurementUnits.list.find(
							item => item.id === values.measurementUnitId
						);
					return (
						<S.FormContentContainer>
							<Input
								value={values.drugName}
								placeholder='Անվանում'
								onChange={val =>
									setFieldValue('drugName', val)
								}
								onEnter={handleSubmit}
								autoFocus
								error={touched.drugName && errors.drugName}
							/>
							<Input
								value={values.drugAmount}
								placeholder='Քանակ'
								onChange={val =>
									setFieldValue('drugAmount', val)
								}
								onEnter={handleSubmit}
								error={
									touched.drugAmount && errors.drugAmount
								}
							/>
							<S.FormItem>
								<Select
									value={selectedMeasurementUnit}
									options={measurementUnits.list}
									placeholder='Չափման Միավոր'
									onChange={val => {
										setFieldValue(
											'measurementUnitId',
											val?.value
										);
									}}
								/>
								{errors.treatedProductsIds &&
									touched.treatedProductsIds && (
										<S.ErrorMessage>
											{errors.treatedProductsIds}
										</S.ErrorMessage>
									)}
							</S.FormItem>
							<S.FormItem>
								<Select
									value={values.treatedProducts}
									options={products.list}
									placeholder='Ապրանքներ'
									isMulti={true}
									onChange={valuesList => {
										const selectedList = valuesList.map(
											item => item.value
										);
										setFieldValue(
											'treatedProducts',
											products.list.filter(product =>
												selectedList.includes(product.id)
											)
										);
										setFieldValue(
											'treatedProductsIds',
											selectedList
										);
									}}
								/>
								{errors.treatedProductsIds &&
									touched.treatedProductsIds && (
										<S.ErrorMessage>
											{errors.treatedProductsIds}
										</S.ErrorMessage>
									)}
							</S.FormItem>
							<S.FormItem>
								<DatePicker
									placeholder='Ամսաթիվ'
									date={values.date}
									onChange={val =>
										setFieldValue('date', val)
									}
								/>
							</S.FormItem>
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
		</S.TreatmentFormContainer>
	);
};
