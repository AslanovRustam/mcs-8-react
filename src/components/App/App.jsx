import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import css from "./App.module.css";
import TextInput from "../TextInput/TextInput";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

export default function App() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("en");

  const debouncedSetText = useDebouncedCallback(setText, 300);

  useEffect(() => {
    console.log(`Make HTTP request with ${text}`);
  }, [text]);

  return (
    <div className={css.container}>
      <TextInput value={text} onChange={debouncedSetText} />
      <p>Text: {text}</p>

      <LangSwitcher value={lang} onSelect={setLang} />
      <p>Current lang: {lang}</p>
      <hr />
    </div>
  );
}
