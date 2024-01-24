import * as Yup from 'yup';

export const initialValues = {
  username: '',
  password: ''
}

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  password: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել')
})