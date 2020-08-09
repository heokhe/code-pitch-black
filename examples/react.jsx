import React, { render, useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(x => x + 1);
    console.log(Math.random(5))
  };

  return (
    <div>
      Clicked {number} times
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}

render(<Counter />, document.getElementById('app'));
