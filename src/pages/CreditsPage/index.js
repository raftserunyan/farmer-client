import { connect } from 'react-redux';

import { CreditsPage as Self } from './CreditsPage';
import { loadCredits } from 'redux/actions/credits';

const mapStateToProps = ({ credits }) => ({
	credits,
});

const mapDispatchToProps = {
	loadCredits,
};

export const CreditsPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(Self);
