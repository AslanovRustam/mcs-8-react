/**
 * Використовує контекст вибору теми,
 * не отримує пропсів.
 */
import { useTheme } from "../hooks/useTheme";

export default function ThemeSwitcher() {
  const { toggle } = useTheme();

  return <button onClick={toggle}>Toggle theme</button>;
}
