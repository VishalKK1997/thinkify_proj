import { FETCH_ARTICLES } from "../constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
