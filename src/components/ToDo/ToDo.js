import { useDispatch } from "react-redux";
import { deleteToDoActionCreator } from "../../redux/feature/toDoSlice";

const ToDo = ({ toDo: { id, name, done } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>ID:{id}</p>
      <p>To do:{name}</p>
      <p>
        Done: {done && "Completed"} {!done && "Pending"}
      </p>
      <button onClick={() => dispatch(deleteToDoActionCreator(id))}>
        Delete
      </button>
    </>
  );
};

export default ToDo;
