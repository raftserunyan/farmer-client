import * as Yup from 'yup';

export const initialValues = {
  amount: '',
  investorId: null
}

export const validationSchema = Yup.object().shape({
  amount: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  investorId: Yup.number()
    .required('Դաշտը չի կարող դատարկ լինել')
});