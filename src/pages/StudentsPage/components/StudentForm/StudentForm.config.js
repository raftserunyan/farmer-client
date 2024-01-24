import * as Yup from 'yup';

import { validations } from 'constants/validations';
import { pick } from 'lodash';

export const initialValues = {
  status: '',
  lastname: '',
  statusId: null,
  groupId: null,
  gender: null,
  educationStatus: null,
  firstname: '',
  isSameAddress: false,
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
  validTill: null,
  socialCardNumber: '',
  residentCommunityId: null,
  registrationAddress: '',
  registrationRegionId: null,
  registrationCommunityId: null,
  acceptanceCommandNumber: ''
};

const validationKeysBySteps = [
  [
    'firstname',
    'lastname',
    'fathername',
    'dateOfBirth',
    'groupId',
    'acceptanceCommandNumber',
    'socialCardNumber',
    'dateOfAcceptance',
    'commissariatId',
    'statusId'
  ],
  [
    'privilegeId',
    'educationBasis',
    'nationalityId',
    'citizenshipId',
    'contactNumbers',
    'educationStatus',
    'gender',
    'healthStatusId',
    'passportType',
    'passportSeries',
    'passportIssuedBy',
    'passportDateOfIssue'
  ],
  [
    'registrationRegionId',
    'registrationCommunityId',
    'registrationAddress',
    'residentRegionId',
    'residentCommunityId',
    'residentAddress'
  ]
];

export const getValidationSchema = (step) =>
  Yup.object().shape(pick(validations.student, validationKeysBySteps[step]), [
    'passportSeries',
    'socialCardNumber'
  ]);
