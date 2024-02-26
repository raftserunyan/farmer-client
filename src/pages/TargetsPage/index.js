import { connect } from 'react-redux';

import { TargetsPage as Self } from './TargetsPage';
import {
	loadTargets,
	deleteTarget,
} from 'redux/actions/targets';
import { showModal } from 'redux/actions/modal';

const mapStateToProps = ({ targets }) => ({
	targets,
});

const mapDispatchToProps = {
	showModal,
	loadTargets,
	deleteTarget,
};

export const TargetsPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(Self);
