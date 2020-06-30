const initialState = {
  isAuthenticated: false,
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG IN":
      return { isAuthenticated: true };
    case "LOG OUT":
      return { isAuthenticated: false };
    default:
      return state;
  }
}
