import { connect } from 'react-redux';

import { InvestorForm as Self } from './InvestorForm';

import {
	editMeasurementUnit,
	createMeasurementUnit,
} from 'redux/actions/measurementUnits';

const mapDispatchToProps = {
	editMeasurementUnit,
	createMeasurementUnit,
};

export const InvestorForm = connect(
	null,
	mapDispatchToProps
)(Self);
