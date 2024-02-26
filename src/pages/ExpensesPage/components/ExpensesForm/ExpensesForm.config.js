import * as Yup from 'yup';

export const initialValues = {
	expenseName: '',
	expenseAmount: '',
	targetId: '',
	date: new Date(),
};

export const validationSchema = Yup.object().shape({
	expenseName: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
	expenseAmount: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
	targetId: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
});
