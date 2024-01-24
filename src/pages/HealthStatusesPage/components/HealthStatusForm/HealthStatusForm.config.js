import * as Yup from 'yup';

export const initialValues = {
  status: ''
}

export const validationSchema = Yup.object().shape({
  status: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել')
});