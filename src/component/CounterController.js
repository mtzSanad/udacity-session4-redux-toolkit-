import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../stores/counterSlice';

const CounterController = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

export default CounterController;
