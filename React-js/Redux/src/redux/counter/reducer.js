import { ADD, SUB } from "../actionType";

const initialState = {
  counter: 0,
};

export const reducerFunction = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, counter: state.counter + payload };
    case SUB:
      return { ...state, counter: state.counter - payload };

    default:
      return state;
  }
};
