import appLogo from "../../assets/app-logo.png";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.container}>
      <a href="">
        <img src={appLogo} alt="" width="80" />
      </a>
    </header>
  );
}
