import * as Yup from 'yup';

export const initialValues = {
  name: '',
  priceKG: ''
}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  priceKG: Yup.number()
    .required('Դաշտը չի կարող դատարկ լինել')
});