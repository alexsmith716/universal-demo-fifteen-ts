import React, { Fragment, useState, useEffect } from 'react';

export const ClockHooks = () => {

  const d = new Date();

  const [date, setDate] = useState(d);

  // >>>> componentDidMount and componentDidUpdate <<<<
  useEffect(() => {

    const timerID = setInterval( () => setDate(new Date()), 1000);
    console.log('>>>>>>>>>>>>>>>> ClockHooks > timerID: ', timerID);

    // return named function or arrow function from the effect
    return function cleanup() {
      clearInterval(timerID);
      console.log('>>>>>>>>>>>>>>>> ClockHooks > cleanup: ', timerID);
    };
  });

  if (date === d) {
    return 'Loading...';
  } else {

    const t = date.toLocaleTimeString();

    return (

      <Fragment>
        {t}
      </Fragment>
    );
  }
}
