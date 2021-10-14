import axios from "axios";

// Action creator can only return plain javascript objects with a type property
// Action will get sent to reducer instantly before data is fetched from API
// So we have used ASYNC AWAIT

// But redux don't work with ASYNC AWAIT, so middleware is used

// Network calls take time to RESOLVE the PROMISE into RESPONSE
// Below function won't be able to pass all API data to reducer on time
// Because PROMISE won't get resolved as Reducer call is made instantly
// So we use ASYNC AWAIT - to let PROMISE get resolved and then RESPONSE is passed to reducer
// For now, below function will display 0 posts on UI
export const fetchPosts = () => {
  const response = axios.get("https://jsonplaceholder.typicode.com/posts");

  return {
    type: "FETCH_POSTS",
    payload: response.data,
  };
};

// We use middleware to support ASYNC AWAIT feature into redux
// Below function, will wait for PROMISE to resolve
// RESPONSE received is passed to reducer
export const fetchPostsUsingMiddleware = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// Below function is enhanced to handle few useful options
// Loading and Error
// Here 3 reducer calls are made
// FETCH_POSTS_REQUEST - to show loading icon till data is being fetched
// FETCH_POSTS_SUCCESS - to show data when promise gets resolved
// FETCH_POSTS_FAILURE - to capture error if promise is not resolved
export const fetchPostsImproved = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", error: error });
  }
};
