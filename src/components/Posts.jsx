import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchPostsImproved } from "../actions/postsAction";

export const Posts = () => {
  const dispatch = useDispatch();

  // From State, we have extracted state provided by POST reducer
  const stateData = useSelector((state) => state.post);

  // useEffect - works like ComponentDidMount, ComponentDidUpdate
  // Need to pass item as [] in second argument - if requires DOM update only on specific item change

  useEffect(() => {
    dispatch(fetchPostsImproved());
  }, [dispatch]);

  // Below function shows data and loading bar
  const renderPosts = () => {
    // isLoading - property present in POST reducer
    if (stateData.isLoading) {
      return <h2>Loading data...</h2>;
    } else {
      return (
        <div>
          {stateData.items.map((x) => (
            <h4 key={x.id}>{x.title}</h4>
          ))}
        </div>
      );
    }
  };

  return renderPosts();
};
