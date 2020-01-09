import React, { useState } from 'react';

import { useIntervalJS } from '../../../../hooks/useIntervalJS';

// making setInterval declarative with react hooks

export const ClockHooksCustom = () => {

  const [countA, setCountA] = useState(33);
  useIntervalJS( () => { setCountA(countA + 1); } , 1000);

  const [countB, setCountB] = useState(127);
  useIntervalJS( () => { setCountB(countB + 1); } , 2000);

  const [clickedCount, setClickedCount] = useState(0);

  return (
    <>
      <div>Counter A: {countA}</div>
      <div>-----------------------------------</div>
      <div>-----------------------------------</div>

      <div>Counter B: {countB}</div>
      <div>-----------------------------------</div>
      <div>-----------------------------------</div>

      <div>You clicked me {clickedCount} times</div>
      <div>
        <button onClick={ () => setClickedCount(clickedCount + 1) }>
          Click me
        </button>
      </div>
      <div>-----------------------------------</div>
      <div>-----------------------------------</div>
    </>
  );
}
