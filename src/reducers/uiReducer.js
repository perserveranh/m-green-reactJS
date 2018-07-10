const initialState = {
  showMessage: false,
  hideMessage: true,
  message: "",
  showLoading: false
};
const uiReaducers = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return (
        Object.assign({}, state), { showMessage: true, message: action.message }
      );
    case "HIDE_MESSAGE":
      return Object.assign({}, state, { showMessage: false });
    case "SHOW_LOADING":
      return Object.assign({}, state, { showLoading: true });
    case "HIDE_LOADING":
      return Object.assign({}, state, { showLoading: false });
    default:
      return [...state];
  }
};

export default uiReaducers;
