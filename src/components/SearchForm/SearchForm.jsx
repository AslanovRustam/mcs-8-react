import { toast } from "sonner";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSearch }) {
  const handleSubmit = formData => {
    const topic = formData.get("topic");
    if (topic === "") {
      toast.error("Please enter search topic");
      return;
    }
    onSearch(topic);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <input type="text" name="topic" className={css.input} />
      <button type="submit">Search</button>
    </form>
  );
}
