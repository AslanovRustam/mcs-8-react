import css from "./TextInput.module.css";

export default function TextInput({ value, onChange }) {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <div className={css.wrapper}>
      <span>Text input</span>
      <input type="text" defaultValue={value} onChange={handleChange} />
    </div>
  );
}
