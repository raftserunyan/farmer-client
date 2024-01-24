import { connect } from 'react-redux';

import { CommandsHistoryPage as Self } from './CommandsHistoryPage';
import { loadCommandsHistory } from 'redux/actions/commandsHistory';
import { showModal } from 'redux/actions/modal';

const mapStateToProps = ({ commandsHistory }) => ({
  commandsHistory
});

const mapDispatchToProps = {
  showModal,
  loadCommandsHistory
};

export const CommandsHistoryPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Self);
