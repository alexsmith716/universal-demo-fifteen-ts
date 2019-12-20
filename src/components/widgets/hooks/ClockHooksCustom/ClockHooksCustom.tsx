import React, { useState } from 'react';
import { useInterval } from '../custom/useInterval';

// making setInterval declarative with react hooks

export const ClockHooksCustom = () => {

  let [count, setCount] = useState(0);

  // useInterval( () => { setCount(count + 1); } , 1000, null);
  useInterval( () => { setCount(count + 1); } , 1000);

  return (
    <>
      {count}
    </>
  );
}
