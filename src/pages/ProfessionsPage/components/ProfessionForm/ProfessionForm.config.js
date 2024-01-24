import { validationMessages } from 'constants/validationMessages';
import * as Yup from 'yup';

export const initialValues = {
  name: '',
  code: '',
  abbreviation: '',
  yearsCount: '',
  number: '',
  fee: '',
  freePlacesCount: 0,
}

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(validationMessages.empty),
  code: Yup.string()
    .required(validationMessages.empty),
  abbreviation: Yup.string()
    .required(validationMessages.empty),
  yearsCount: Yup.string()
    .required(validationMessages.empty),
  number: Yup.string()
    .required(validationMessages.empty),
  fee: Yup.string()
    .required(validationMessages.empty),
  freePlacesCount: Yup.string()
    .required(validationMessages.empty)
});