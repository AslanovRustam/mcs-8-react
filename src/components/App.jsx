import { Toaster, toast } from "sonner";
import cats from "../cats.json";
import AppBar from "./AppBar";
import CatList from "./CatList";

const availalbeCats = cats.filter(cat => cat.available);

const takenCats = cats.filter(cat => !cat.available);

export default function App() {
  return (
    <>
      <AppBar />
      <CatList items={availalbeCats} />
      <hr />
      <CatList items={takenCats} />
      <Toaster position="top-center" />
      <button onClick={() => toast("My first toast")}>Give me a toast</button>
    </>
  );
}
