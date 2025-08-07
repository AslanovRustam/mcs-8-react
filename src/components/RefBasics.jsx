/**
 * - Створення та ініціалізація
 * - Зберігання посилання на елемент
 * - Життєвий цикл рефа
 *  - Ініціалізація при монтуванні
 *  - Доступ в ефектах і функціях
 * - Зберігання значень між оновленнями компонента
 *  - Відсутність реактивності
 */
import { useRef, useEffect } from "react";

export default function RefBasics() {
  const btnRef = useRef();

  // Буде undefined на першому рендері
  // і посиланням на DOM-елемент всі наступні
  console.log("App: ", btnRef.current);

  useEffect(() => {
    // Ефект виконується після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("useEffect: ", btnRef.current);
  }, []);

  const handleRefBtnClick = () => {
    // Кліки будуть після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("handleClick: ", btnRef.current);
  };

  return (
    <button ref={btnRef} onClick={handleRefBtnClick}>
      Button with ref
    </button>
  );
}
