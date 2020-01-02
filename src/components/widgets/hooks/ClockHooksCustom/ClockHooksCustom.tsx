import React, { useState } from 'react';
import { useInterval } from '../custom/useInterval';

import useTimeElapsed from '../../../../hooks/useTimeElapsed';

// making setInterval declarative with react hooks

export const ClockHooksCustom = () => {

  const [count, setCount] = useState(0);
  const { date } = useTimeElapsed(Date.now());

  console.log('>>>>>>>>>>>>>>>> ClockHooksCustom > HOOKS > useTimeElapsed > {date}: ', date);

  // useInterval( () => { setCount(count + 1); } , 1000, null);
  useInterval( () => { setCount(count + 1); }, 1000);

  return (
    <>
      {count}
    </>
  );
}
