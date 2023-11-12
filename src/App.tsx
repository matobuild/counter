import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [second, setSecond] = useState(0);
  const [on, setOn] = useState(false);

  useEffect(() => {
    let time;
    if (on) {
      time = setInterval(() => {
        setSecond((latestSecond) => latestSecond + 1);
      }, 1000);
    }
    return () => clearInterval(time);
  }, [on]);

  const buttonSwitch = () => {
    setOn((latestOn) => !latestOn);
    console.log(on);
  };

  const resetSwitch = () => {
    setSecond(0);
  };

  return (
    <>
      <h4>{count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          count > 0 ? setCount(count - 1) : 0;
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>

      <div>
        <h3>{second} Second</h3>
        <button onClick={buttonSwitch}>Start/STop</button>
        <button onClick={resetSwitch}>RESET</button>
      </div>
    </>
  );
}

export default App;
// use set interval to count second
