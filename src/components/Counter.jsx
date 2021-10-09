import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/counterAction";

export const Counter = () => {
  // useSelector - to access state using reducers
  const count = useSelector((state) => state.count);

  // useDispatch - to pass action to store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};
