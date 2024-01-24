import * as Yup from 'yup';

import { validationMessages } from 'constants/validationMessages';

export const validations = {
  student: {
    firstname: Yup.string(validationMessages.empty)
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    lastname: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    fathername: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    gender: Yup.number()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    residentAddress: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    educationBasis: Yup.number()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    // residentRegionId: Yup.number()
    //   .typeError(validationMessages.empty)
    //   .required(validationMessages.empty),
    // residentCommunityId: Yup.number()
    //   .typeError(validationMessages.empty)
    //   .required(validationMessages.empty),
    registrationAddress: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    // registrationRegionId: Yup.number()
    //   .typeError(validationMessages.empty)
    //   .required(validationMessages.empty),
    // registrationCommunityId: Yup.number()
    //   .typeError(validationMessages.empty)
    //   .required(validationMessages.empty),
    acceptanceCommandNumber: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    dateOfBirth: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    dateOfAcceptance: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    commissariatId: Yup.number()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    statusId: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    groupId: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    healthStatusId: Yup.number()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    nationalityId: Yup.number()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    citizenshipId: Yup.number()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    educationStatus: Yup.number()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),
    socialCardNumber: Yup.string()
      .typeError(validationMessages.empty)
      .required(validationMessages.empty),

    // .when('passportSeries', {
    // is: (passportSeries) => !passportSeries || passportSeries.length === 0,
    // then: Yup.string()
    // .typeError(validationMessages.empty)
    // .required(validationMessages.empty)
    // }),
    passportSeries: Yup.string()
      .required(validationMessages.empty)
      .typeError(validationMessages.empty)
    // passportSeries: Yup.string()
    //   .typeError(validationMessages.empty)
    //   .when('socialCardNumber', {
    //   is: (socialCardNumber) => !socialCardNumber || socialCardNumber.length === 0,
    //   then: Yup.string()
    //   .typeError(validationMessages.empty)
    //   .required(validationMessages.empty)
    //   })
  }
};
