import React, { useEffect, useMemo } from 'react';

import * as S from './ExpensesForm.styles';
import closeIcon from 'images/close.png';
import { Input, Button, DatePicker, Select } from 'ui';
import { Formik } from 'formik';
import {
	initialValues,
	validationSchema,
} from './ExpensesForm.config';
import { useDispatch, useSelector } from 'react-redux';
import { loadTargets } from 'redux/actions/targets';

export const ExpensesForm = ({
	hideModal,
	editExpense,
	createExpense,
	editableData,
}) => {
	const dispatch = useDispatch();
	const targets = useSelector(state => state.targets);

	const formActionType = useMemo(
		() => (editableData ? 'Փոփոխել' : 'Ավելացնել'),
		[editableData]
	);

	const onSubmit = values => {
		if (editableData) {
			editExpense(values);
		} else {
			createExpense(values);
		}

		hideModal();
	};

	useEffect(() => {
		if (!targets.loaded)
			dispatch(
				loadTargets({
					pageNumber: 1,
					pageSize: 100000,
				})
			);
	}, []);

	return (
		<S.ExpensesFormContainer>
			<S.FormHeaderContainer>
				<S.HeaderTitle>{formActionType} ծախս</S.HeaderTitle>
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
					const selectedTarget = targets.list.find(
						target => target.id === values.targetId
					);

					return (
						<S.FormContentContainer>
							<Input
								value={values.expenseName}
								placeholder='Անվանում'
								onChange={val =>
									setFieldValue('expenseName', val)
								}
								onEnter={handleSubmit}
								autoFocus
								error={
									touched.expenseName && errors.expenseName
								}
							/>
							<S.FormItem>
								<DatePicker
									placeholder='Ամսաթիվ'
									date={values.date}
									disabled={true}
									onChange={val =>
										setFieldValue('date', val)
									}
								/>
							</S.FormItem>
							<Input
								value={values.expenseAmount}
								placeholder='Գումար'
								onChange={val =>
									setFieldValue('expenseAmount', val)
								}
								onEnter={handleSubmit}
								error={
									touched.expenseAmount &&
									errors.expenseAmount
								}
							/>
							<S.FormItem>
								<Select
									value={selectedTarget}
									options={targets.list}
									placeholder='Նպատակ'
									onChange={val =>
										setFieldValue('targetId', val?.value)
									}
								/>
								{errors.productId && touched.productId && (
									<S.ErrorMessage>
										{errors.productId}
									</S.ErrorMessage>
								)}
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
		</S.ExpensesFormContainer>
	);
};
