
// The useCallback hook in React is used to memoize a callback function, 
// so it's only recreated when its dependencies change.
//  This is especially useful to avoid unnecessary re-renders of child components that rely on reference-equality to detect changes in props.
import React, { useState, useCallback } from 'react';
import Child from './Child';

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const theme = {
    backgroundColor: dark ? '#222' : '#eee',
    color: dark ? '#fff' : '#000',
    padding: '10px',
  };

  return (
    <div style={theme}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <Child onClick={increment} />
    </div>
  );
};

export default UseCallbackHook;
