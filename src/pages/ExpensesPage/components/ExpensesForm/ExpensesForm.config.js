import * as Yup from 'yup';

export const initialValues = {
  expenseName: '',
  expenseAmount: '',
  expensePurpose: '',
}

export const validationSchema = Yup.object().shape({
  expenseName: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  expenseAmount: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
  expensePurpose: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել')
});