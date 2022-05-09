import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ToDoList from "./components/ToDoList/ToDoList";
import { loadToDosActionCreator } from "./redux/feature/toDoSlice";
import toDosList from "./utils/toDoData";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadToDosActionCreator(toDosList));
  }, [dispatch]);

  return <ToDoList />;
}

export default App;
