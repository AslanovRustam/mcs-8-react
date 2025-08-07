import { useRef, useState, useEffect } from "react";

export default function RefStorage() {
  const valueRef = useRef(0);

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log("useEffect: ", valueRef.current);
  });

  const updateRefValue = () => {
    valueRef.current += 1;
    console.log("updateRefValue: ", valueRef.current);
  };

  return (
    <>
      <button onClick={updateRefValue}>Ref clicks: {valueRef.current}</button>
      <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
    </>
  );
}
