import React, { Component, useState, useEffect } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);
      const incrementCount = () => setCount(count + 1);
      useEffect(() => {
        document.title = `You clicked ${count} times`
      });

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={incrementCount}>Click me</button>
        </div>
      )
    }

    export default Counter;
