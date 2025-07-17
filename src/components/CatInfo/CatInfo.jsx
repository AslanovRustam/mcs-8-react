import clsx from "clsx";
import css from "./CatInfo.module.css";

export default function CatInfo({ cat: { name, age, image, available } }) {
  const textClsx = clsx(css.text, available ? css.available : css.taken);

  return (
    <>
      <img src={image} alt={name} width="80" />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p className={textClsx}>Available: {available ? "+" : "-"}</p>
    </>
  );
}
