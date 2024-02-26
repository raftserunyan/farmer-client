import React, { useMemo } from 'react';

import * as S from './TargetForm.styles';
import closeIcon from 'images/close.png';
import { Input, Button } from 'ui';
import { Formik } from 'formik';
import {
	initialValues,
	validationSchema,
} from './TargetForm.config';

export const TargetForm = ({
	hideModal,
	editableData,
	editTarget,
	createTarget,
}) => {
	const formActionType = useMemo(
		() => (editableData ? 'Փոփոխել' : 'Ավելացնել'),
		[editableData]
	);

	const onSubmit = values => {
		if (editableData) {
			editTarget(values);
		} else {
			createTarget(values);
		}

		hideModal();
	};
	return (
		<S.InvestorFormContainer>
			<S.FormHeaderContainer>
				<S.HeaderTitle>
					{formActionType} նպատակ
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
		</S.InvestorFormContainer>
	);
};
