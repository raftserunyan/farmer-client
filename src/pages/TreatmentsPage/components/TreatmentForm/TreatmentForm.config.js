import * as Yup from 'yup';

export const initialValues = {
  drugName: '',
  drugWeight: '',
  treatedProductsIds: []
}

export const validationSchema = Yup.object().shape({
  drugName: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  drugWeight: Yup.number()
    .required('Դաշտը չի կարող դատարկ լինել'),
});