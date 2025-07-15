export default function CatInfo({ cat: { name, age, image, available } }) {
  return (
    <>
      <img src={image} alt={name} width="80" />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Available: {available ? "+" : "-"}</p>
    </>
  );
}
