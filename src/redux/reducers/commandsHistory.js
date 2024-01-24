import { AUTH_TYPES } from 'redux/types/auth';
import { COMMANDS_HISTORY_TYPES } from 'redux/types/commandsHistory';

const initialState = {
  loaded: false,
  list: [],
  total: 0
};

export const commandsHistory = (state = initialState, action) => {
  switch (action.type) {
    case COMMANDS_HISTORY_TYPES.LOAD_COMMANDS_HISTORY:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      };
    case COMMANDS_HISTORY_TYPES.APPROVE_COMMAND:
      const commandIndex = state.list.findIndex(
        (command) => command.commandId === action.studentCommandId
      );

      return {
        ...state,
        list: [
          ...state.list.slice(0, commandIndex),
          {
            ...state.list[commandIndex],
            isAccepted: action.accept
          },
          ...state.list.slice(commandIndex + 1)
        ]
      };
    case AUTH_TYPES.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
