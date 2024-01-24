import { toast } from 'react-toastify';
import { COMMANDS_HISTORY_TYPES } from 'redux/types/commandsHistory';
import { HttpService } from 'services';

export const loadCommandsHistory = () => async (dispatch) => {
  try {
    const { data, total } = await HttpService.get('command-history');

    dispatch({
      type: COMMANDS_HISTORY_TYPES.LOAD_COMMANDS_HISTORY,
      list: data,
      total
    });
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`);
  }
};

export const approveCommand =
  ({ studentCommandId, accept }) =>
  async (dispatch) => {
    try {
      await HttpService.post('command/accept', { studentCommandId, accept });

      dispatch({
        type: COMMANDS_HISTORY_TYPES.LOAD_COMMANDS_HISTORY,
        studentCommandId,
        accept
      });
    } catch (ex) {
      toast.error(`Առաջացավ խնդիր: ${ex.message}`);
    }
  };
