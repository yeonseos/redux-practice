let initialState = {
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    // ...state => 만약 state가 여러개이면 다른 state값은 유지하되 count만 바꾼다
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    default:
      return { ...state };
  }
}

export default reducer;
