import { EventActionEnum, EventActions, EventState } from "./types";

const initialState: EventState = {
  guests: [],
  events: [],
};

export const EventReducer = (
  state = initialState,
  action: EventActions
): EventState => {
  switch (action.type) {
    case EventActionEnum.SET_GUESTS:
      return {
        ...state,
        guests: action.payload,
      };

    case EventActionEnum.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
};
