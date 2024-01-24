import * as Yup from 'yup';

export const initialValues = {
  name: '',
  phoneNumber: ''
}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  phoneNumber: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել')
});