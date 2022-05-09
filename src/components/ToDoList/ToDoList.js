import { useSelector } from "react-redux";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
  const toDos = useSelector((state) => state.toDos);

  return (
    <ul>
      {toDos.map((toDo) => {
        return (
          <li key={toDo.id}>
            <ToDo toDo={toDo} />
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
