import React, { useState, useEffect } from 'react';

export const ClockHooks = () => {

  const d = new Date();

  const [date, setDate] = useState(d);

  // >>>> componentDidMount and componentDidUpdate <<<<
  useEffect(() => {

    const timerID = setInterval( () => setDate(new Date()), 1000);
    // console.log('>>>>>>>>>>>>>>>> ClockHooks > timerID: ', timerID);

    // return named function or arrow function from the effect
    // return function cleanup() {
    return () => {
      clearInterval(timerID);
      // console.log('>>>>>>>>>>>>>>>> ClockHooks > clearInterval: ', timerID);
    };
  });

  if (date === d) {
    return 'Loading...';
  } else {

    const t = date.toLocaleTimeString();

    return (
      <>
        {t}
      </>
    );
  }
}

// useEffect(() => {
//   document.title = `You clicked ${count} times`;
// }, [count]); // Only re-run the effect if count changes

// This also works for effects that have a cleanup phase:
// 
// useEffect(() => {
//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }
// 
//   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//   return () => {
//     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//   };
// }, [props.friend.id]); // Only re-subscribe if props.friend.id changes
