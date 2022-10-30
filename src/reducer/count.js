export function countReducer(state = null, action) {
    switch (action.type) {
      case "countData":
        return action.payload;
      default:
        return state;
    }
  }
  