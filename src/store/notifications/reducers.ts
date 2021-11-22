import { initialNotificationState } from './state';
import { NotificationActions, UPDATE_NOTIFICATIONS_STATUS } from './types';

export const notificationsReducer = (
  state = initialNotificationState,
  action: NotificationActions
) => {
  switch (action.type) {
    case UPDATE_NOTIFICATIONS_STATUS:
      return {
        ...state,
        ...{
          status: action.status,
          token: action.token,
        },
      };
    default:
      return state;
  }
};
