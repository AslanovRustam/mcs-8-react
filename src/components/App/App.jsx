import AppBar from "../AppBar/AppBar";
import CatList from "../CatList";
import cats from "../../cats.json";
import css from "./App.module.css";
import { BiAt } from "react-icons/bi";
import CloudIcon from "../../assets/cloud-sun.svg";

export default function App() {
  return (
    <div className={css.container}>
      <CloudIcon className={css.icon} />
      <BiAt className={css.icon} />
      <AppBar />
      <CatList items={cats} />
    </div>
  );
}
