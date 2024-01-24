import { connect } from 'react-redux';

import { ApproveCommand as Self } from './ApproveCommand';
import { approveCommand } from 'redux/actions/commandsHistory';

const mapDispatchToProps = {
  approveCommand
};

export const ApproveCommand = connect(null, mapDispatchToProps)(Self);
