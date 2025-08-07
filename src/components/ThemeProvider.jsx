import { useDarkMode } from "usehooks-ts";
import { ThemeContext } from "../contexts/theme";

export default function ThemeProvider({ children }) {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <ThemeContext value={{ isDarkMode, toggle, enable, disable }}>
      {children}
    </ThemeContext>
  );
}
