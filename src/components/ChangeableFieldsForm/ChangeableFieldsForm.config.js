import * as Yup from 'yup';
import lodash from 'lodash'

import { validations } from 'constants/validations';

export const initialValues = {
  status: '',
  lastname: '',
  statusId: null,
  groupId: null,
  firstname: '',
  fathername: '',
  dateOfBirth: null,
  privilegeId: null,
  professionId: null,
  citizenshipId: null,
  nationalityId: null,
  contactNumbers: '',
  healthStatusId: null,
  commissariatId: null,
  passportSeries: '',
  residentAddress: '',
  residentRegionId: null,
  dateOfAcceptance: null,
  socialCardNumber: '',
  residentCommunityId: null,
  registrationAddress: '',
  registrationRegionId: null,
  registrationCommunityId: null,
  acceptanceCommandNumber: '',
}

export const getValidationSchema = (changeableColumns) => (
  Yup.object().shape(
    lodash.pick(validations.student, Object.keys(changeableColumns)),
    ['passportSeries', 'socialCardNumber']
  )
)
