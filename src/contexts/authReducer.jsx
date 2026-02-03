export const initialState = {
  showModal: false,
  navigateTo: null,
  message: null,
  error: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, showModal: true };

    case "HIDE_MODAL":
      return { ...state, showModal: false };

    case "NAVIGATE_TO":
      return { ...state, navigateTo: action.payload };

    case "SET_MESSAGE":
      return { ...state, message: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
