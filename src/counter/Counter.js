// Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-center flex-col gap-5 items-center">
      <p className="text-6xl text-green-500">Count: {count}</p>
      <button
        className="bg-blue-500 text-white p-1 "
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 text-white p-1 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
