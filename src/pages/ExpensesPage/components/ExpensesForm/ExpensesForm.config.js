import * as Yup from 'yup';

export const initialValues = {
	name: '',
	amount: '',
	targetId: '',
	investorId: '',
	date: new Date(),
};

export const validationSchema = Yup.object().shape({
	name: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
	amount: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
	targetId: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
	investorId: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
});
