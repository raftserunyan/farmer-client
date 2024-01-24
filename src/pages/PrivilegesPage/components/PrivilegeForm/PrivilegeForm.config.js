import * as Yup from 'yup';

export const initialValues = {
  name: ''
}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել')
});