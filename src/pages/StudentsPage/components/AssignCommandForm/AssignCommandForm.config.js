import * as Yup from 'yup';

export const initialValues = {
  commandId: null,
  affectDate: null,
  commandNumber: '',
  selectedCommand: null
}

export const validationSchema = Yup.object().shape({
  commandNumber: Yup.number()
    .typeError('Դաշտը չի կարող դատարկ լինել')
    .required('Դաշտը չի կարող դատարկ լինել'),
  commandId: Yup.number()
    .typeError('Դաշտը չի կարող դատարկ լինել')
    .required('Դաշտը չի կարող դատարկ լինել'),
  affectDate: Yup.string()
    .typeError('Դաշտը չի կարող դատարկ լինել')
    .required('Դաշտը չի կարող դատարկ լինել'),
});