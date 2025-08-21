import Balance from "./Balance";
import LangSwitcher from "./LangSwitcher";
import { useLang } from "../redux/localeSlice";

export default function App() {
  const lang = useLang();

  return (
    <div>
      <h1>State management with Redux</h1>
      <Balance />

      <LangSwitcher />
      <p>Current lang: {lang}</p>
    </div>
  );
}
