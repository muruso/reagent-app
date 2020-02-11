// action type
const LOAD_SUCCESS = 'src/modules/Orders/LOAD_SUCCESS';

const initialState = {
  state: {}
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SUCCESS:
      return action.payload.orders;

    default:
      return state;
  }
}

// action-creator
export function success(payload) {
  return { type: LOAD_SUCCESS, payload };
}
