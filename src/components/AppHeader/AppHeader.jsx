import ThemeSwitcher from "../ThemeSwitcher";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={css.header}>
      <ThemeSwitcher />
    </header>
  );
}
