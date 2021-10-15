// Reducer for posts

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// Use SWITCH case to return updated state based on action type

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_POSTS_SUCCESS":
      return { ...state, items: action.payload, isLoading: false };
    case "FETCH_POSTS_FAILURE":
      return { ...state, error: action.error };
    default:
      return state;
  }
};
