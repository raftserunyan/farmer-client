import { validationMessages } from 'constants/validationMessages';
import * as Yup from 'yup';

export const initialValues = {
  professionId: null,
  studentSemesters: [],
  semestersForCalculation: []
}

export const validationSchema = Yup.object().shape({
  professionId: Yup.number()
    .typeError(validationMessages.empty)
    .required(validationMessages.empty),
  studentSemesters: Yup.array()
    .of(Yup.number())
    .test({
      message: validationMessages.empty,
      test: arr => arr.length > 0
    }),
  semestersForCalculation: Yup.array()
    .of(Yup.number())
    .test({
      message: validationMessages.empty,
      test: arr => arr.length > 0
    }),
});