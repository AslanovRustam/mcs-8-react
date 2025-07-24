// import axios from "axios";
import { useLocalStorage } from "react-use";
import Timer from "./Timer";
import Sidebar from "./Sidebar";

export default function App() {
  // const [character, setCharacter] = useState(null);
  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   axios
  //     .get(`https://swapi.info/api/people/${count}`)
  //     .then(res => setCharacter(res.data));
  // }, [count]);

  const [isOpen, setIsOpen] = useLocalStorage("sidebar-state", false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}>Fetch next charater</button>
      <pre>{JSON.stringify(character, null, 2)}</pre> */}
      <button onClick={openSidebar}>Open sidebar</button>
      {/* {isOpen && <Timer />} */}
      {isOpen && <Sidebar onClose={closeSidebar} />}
    </>
  );
}

// const [isOpen, setIsOpen] = useState(() => {
//   const savedState = window.localStorage.getItem("sidebar-state");
//   if (savedState !== null) {
//     return JSON.parse(savedState);
//   }
//   return false;
// });

// useEffect(() => {
//   window.localStorage.setItem("sidebar-state", JSON.stringify(isOpen));
// }, [isOpen]);
