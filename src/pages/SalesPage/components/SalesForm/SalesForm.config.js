import * as Yup from 'yup';

export const initialValues = {
	productId: null,
	weight: '',
	priceKG: '',
	customerId: null,
	paid: '',
	date: null,
};

export const validationSchema = Yup.object().shape({
	productId: Yup.string()
		.required('Դաշտը չի կարող դատարկ լինել')
		.typeError('Դաշտը չի կարող դատարկ լինել'),
	customerId: Yup.number()
		.required('Դաշտը չի կարող դատարկ լինել')
		.typeError('Դաշտը չի կարող դատարկ լինել'),
	weight: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
	priceKG: Yup.number().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
	paid: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
});
