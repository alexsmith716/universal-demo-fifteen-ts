import { useState } from 'react';

// https://reactjs.org/docs/hooks-custom.html

interface UseTimeElapsedReturn {
  date: any;
}

function useTimeElapsed(init: any): UseTimeElapsedReturn {

  const [ date ] = useState(init);

  // -------------------------------------

  // -------------------------------------

  return {
    date,
  };

}

export default useTimeElapsed;
