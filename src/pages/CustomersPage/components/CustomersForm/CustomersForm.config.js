import * as Yup from 'yup';

export const initialValues = {
	name: '',
	address: '',
	phoneNumber: '',
	accountNumber: '',
	hvhh: '',
};

export const validationSchema = Yup.object().shape({
	name: Yup.string().required(
		'Դաշտը չի կարող դատարկ լինել'
	),
	// address: Yup.string()
	//   .required('Դաշտը չի կարող դատարկ լինել'),
	// phoneNumber: Yup.string()
	//   .required('Դաշտը չի կարող դատարկ լինել'),
	// accountNumber: Yup.string()
	//   .required('Դաշտը չի կարող դատարկ լինել'),
	// hvhh: Yup.string()
	//   .required('Դաշտը չի կարող դատարկ լինել'),
});
