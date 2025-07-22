/**
 * - Зберігає стан count
 * - Збільшує поточне значення count при onClick
 * - Рендериться у App
 */

export default function ClickCounter({ value, onUpdate }) {
  return <button onClick={onUpdate}>Clicks {value}</button>;
}
