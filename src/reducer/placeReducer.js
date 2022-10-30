export function placeReducer(state = null, action) {
  switch (action.type) {
    case "placeData":
      return action.payload;
    default:
      return state;
  }
}
