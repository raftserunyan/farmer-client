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
import { loadInvestors } from 'redux/actions/investors';
import { StorageService } from 'services';

export const ExpensesForm = ({
	hideModal,
	editExpense,
	createExpense,
	editableData,
}) => {
	const dispatch = useDispatch();
	const targets = useSelector(state => state.targets);
	const investors = useSelector(state => state.investors);

	const formActionType = useMemo(
		() => (editableData ? 'Փոփոխել' : 'Ավելացնել'),
		[editableData]
	);

	const onSubmit = values => {
		if (editableData) {
			editExpense(values);
		} else {
			if (values.date)
				StorageService.set(
					'expenseDefaultDate',
					values.date
				);
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

	useEffect(() => {
		if (!investors.loaded)
			dispatch(
				loadInvestors({
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
				initialValues={
					editableData
						? {
								...editableData,
								targetId: editableData.target?.id,
								investorId: editableData.investor?.id,
						  }
						: {
								...initialValues,
								date:
									StorageService.get(
										'expenseDefaultDate'
									) || new Date(),
						  }
				}
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
					const selectedInvestor = investors.list.find(
						investor => investor.id === values.investorId
					);

					if (
						!!investors.list?.length &&
						!values.investorId
					) {
						setFieldValue(
							'investorId',
							investors.list.find(item => item.id === 1)?.id
						);
					}

					return (
						<S.FormContentContainer>
							<Input
								value={values.name}
								placeholder='Անվանում'
								onChange={val => setFieldValue('name', val)}
								onEnter={handleSubmit}
								autoFocus
								error={touched.name && errors.name}
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
							<Input
								value={values.amount}
								placeholder='Գումար'
								onChange={val =>
									setFieldValue('amount', val)
								}
								onEnter={handleSubmit}
								error={touched.amount && errors.amount}
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
								{errors.investorId &&
									touched.investorId && (
										<S.ErrorMessage>
											{errors.investorId}
										</S.ErrorMessage>
									)}
							</S.FormItem>
							<S.FormItem>
								<Select
									value={selectedInvestor}
									options={investors.list}
									placeholder='Ներդրող'
									onChange={val =>
										setFieldValue('investorId', val?.value)
									}
								/>
								{errors.investorId &&
									touched.investorId && (
										<S.ErrorMessage>
											{errors.investorId}
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
