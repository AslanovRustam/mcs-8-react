import { useState, useEffect } from "react";
import css from "./Loader.module.css";

export default function Loader({ children }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(
      () => setDots(d => (d.length < 3 ? d + "." : "")),
      250
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <strong className={css.text}>
      {children}
      {dots}
    </strong>
  );
}
