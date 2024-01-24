import * as Yup from 'yup';

export const initialValues = {
  name: '',
  surname: '',
  username: '',
  password: ''
}

export const getValidationSchema = (isEditMode) => {
  const validations = {
    name: Yup.string()
    .required('Դաշտը չի կարող դատարկ լինել'),
    surname: Yup.string()
      .required('Դաշտը չի կարող դատարկ լինել'),
    username: Yup.string()
      .required('Դաշտը չի կարող դատարկ լինել')
  }

  if (!isEditMode)
    validations.password = Yup.string()
      .required('Դաշտը չի կարող դատարկ լինել')

  return Yup.object().shape(validations)
}