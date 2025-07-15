import CatInfo from "./CatInfo";

export default function CatList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <CatInfo cat={item} />
        </li>
      ))}
    </ul>
  );
}
