import React from 'react';
import { useSelector } from 'react-redux';

const ShowCounter = () => {
  const count = useSelector((state) => state.counter.counter);
  return <div>{count}</div>;
};

export default ShowCounter;
