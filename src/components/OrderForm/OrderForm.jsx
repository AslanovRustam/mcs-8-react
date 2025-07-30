import { useId } from "react";
import css from "./OrderForm.module.css";

export default function OrderForm() {
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.currentTarget;

  //   const formData = new FormData(form);

  // const formValues = {
  //   ...Object.fromEntries(formData),
  //   restrictions: formData.getAll("restrictions"),
  // };

  //   console.log(formValues);

  //   form.reset();
  // };

  const id = useId();

  const handleSubmit = formData => {
    const formValues = {
      ...Object.fromEntries(formData),
      restrictions: formData.getAll("restrictions"),
    };

    console.log(formValues);
  };

  return (
    // <form className={css.form} onSubmit={handleSubmit}>
    <form className={css.form} action={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>
        <label className={css.label} htmlFor={`${id}-username`}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="username"
          id={`${id}-username`}
        />

        <label className={css.label} htmlFor={`${id}-email`}>
          Email
        </label>
        <input
          className={css.input}
          type="email"
          name="email"
          id={`${id}-email`}
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Dietary restrictions:</legend>
        <label className={css.option}>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label className={css.option}>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label className={css.option}>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>

      <label className={css.label}>Preferred delivery time</label>
      <select name="deliveryTime" defaultValue="" className={css.input}>
        <option value="" disabled>
          -- Choose delivery time --
        </option>
        <option value="morning">Morning (8:00-12:00)</option>
        <option value="afternoon">Afternoon (12:00-16:00)</option>
        <option value="evening">Evening (16:00-20:00)</option>
      </select>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
