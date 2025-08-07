import { useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(null);

  const intervalIdRef = useRef();

  const startTimer = () => {
    setTime(new Date());
    intervalIdRef.current = setInterval(() => setTime(new Date()), 1000);
    console.log("startTimer", intervalIdRef.current);
  };

  const stopTimer = () => {
    setTime(null);
    console.log("stopTimer", intervalIdRef.current);
    clearInterval(intervalIdRef.current);
  };

  const isRunning = Boolean(time);

  return (
    <>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      {isRunning && <h1>{time?.toLocaleTimeString()}</h1>}
    </>
  );
}
