import React, { useState, useEffect } from 'react';

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

      <div className="row justify-content-center">
        <div className="col-md-auto">

          <div className="d-flex bg-color-ivory container-padding-border-radius-2">

            <div className="width-400 text-center">

              <div className="row">

                <div className="col">
                  {t}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}
