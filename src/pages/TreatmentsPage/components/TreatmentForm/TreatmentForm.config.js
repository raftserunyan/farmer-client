import * as Yup from 'yup';

export const initialValues = {
	drugName: '',
	drugAmount: '',
	treatedProductsIds: [],
	treatedProducts: null,
	measurementUnitId: null,
	date: null,
};

export const validationSchema = Yup.object().shape({
	drugName: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
	drugAmount: Yup.number().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
});
