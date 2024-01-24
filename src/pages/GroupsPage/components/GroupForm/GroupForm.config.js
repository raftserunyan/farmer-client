import { validationMessages } from 'constants/validationMessages';
import * as Yup from 'yup';

export const initialValues = {
  number: '',
  professionId: null,
  curriculum: [],
  openedAt: ''
}

export const getInitialValues = () => {
  
  return {
    number: '',
    professionId: null,
    curriculum: [],
    openedAt: ''
  }
}

export const validationSchema = Yup.object().shape({
  number: Yup.string()
    .required(validationMessages.empty),
  openedAt: Yup.number()
    .required(validationMessages.empty)
    .typeError(validationMessages.number),
  professionId: Yup.number()
    .required(validationMessages.empty)
    .typeError(validationMessages.empty)
});