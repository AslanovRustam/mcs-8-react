import TaskList from "../TaskList/TaskList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import TaskForm from "../TaskForm/TaskForm";
import css from "./App.module.css";
import { fetchTasks } from "../../redux/tasksOps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const isLoading = useSelector(state => state.tasks.loading);
  const isError = useSelector(state => state.tasks.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <main className={css.container}>
      <TaskForm />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>}
      <TaskList />
    </main>
  );
}
