// import UseMemoExample from "../UseMemoExample";
// import RefBasics from "../RefBasics";
// import Form from "../Form";
// import Player from "../Player";
// import RefStorage from "../RefStorage";
// import Timer from "../Timer";
import AppHeader from "../AppHeader/AppHeader";
// import AbortRequestExample from "../AbortRequestExample";
import css from "./App.module.css";
import { useTheme } from "../../hooks/useTheme";

export default function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={css.container}>
      <h1>Current theme: {isDarkMode ? "dark" : "light"}</h1>
      {/* <UseMemoExample /> */}
      {/* <RefBasics /> */}
      {/* <Form /> */}
      {/* <Player /> */}
      {/* <RefStorage /> */}
      {/* <Timer /> */}
      {/* <AbortRequestExample /> */}
      <AppHeader />
    </div>
  );
}
