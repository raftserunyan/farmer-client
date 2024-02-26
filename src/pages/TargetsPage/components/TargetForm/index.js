import { connect } from 'react-redux';

import { TargetForm as Self } from './TargetForm';

import {
	editTarget,
	createTarget,
} from 'redux/actions/targets';

const mapDispatchToProps = {
	editTarget,
	createTarget,
};

export const TargetForm = connect(
	null,
	mapDispatchToProps
)(Self);
