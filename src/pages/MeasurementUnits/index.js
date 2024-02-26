import { connect } from 'react-redux';

import { MeasurementUnitsPage as Self } from './MeasurementUnitsPage';
import {
	loadMeasurementUnits,
	deleteMeasurementUnit,
} from 'redux/actions/measurementUnits';
import { showModal } from 'redux/actions/modal';

const mapStateToProps = ({ measurementUnits }) => ({
	measurementUnits,
});

const mapDispatchToProps = {
	showModal,
	loadMeasurementUnits,
	deleteMeasurementUnit,
};

export const MeasurementUnitsPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(Self);
