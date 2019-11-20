import React, { useState, useEffect, useRef } from 'react';

// interface ClockHooksProps {
//   time: string;
// }

export const ClockHooks = () => {

  const [time, setTime] = useState(0);

  const refContainer = useRef();

  function start() {
    if(!refContainer.current) {
      setCurrentTime();
      refContainer.current = setInterval(() => setCurrentTime(), 1000);
    }
  }

  // function reset() {
  //   if (refContainer.current) {
  //     clearInterval(refContainer.current);
  //     refContainer.current = undefined;
  //   }
  //   setTime(0);
  // }

  function setCurrentTime() {
    var now = new Date();
    // const time = now.toLocaleTimeString();
    const time = now.getSeconds();
    setTime(time);
  }

  // didMount effect
  useEffect(() => {
    // on mount
    start();
    // on unmount: Specify how to clean up after this effect:
    // return reset;
  });

  return (
    <div>
      { time }
    </div>
  );
}
