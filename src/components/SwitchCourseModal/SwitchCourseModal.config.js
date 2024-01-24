import * as Yup from 'yup';

export const initialValues = {
  groups: []
}

export const validationSchema = Yup.object().shape({
  groups: Yup.array()
    .required('Դաշտը չի կարող դատարկ լինել')
});