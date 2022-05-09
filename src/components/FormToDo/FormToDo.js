import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoActionCreator } from "../../redux/feature/toDoSlice";

const FormToDo = () => {
  const dispatch = useDispatch;

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState("");

  const addToDo = (event) => {
    event.preventDefault();
    if (id === "") {
      return;
    }
    if (name === "") {
      return;
    }
    if (done === "") {
      return;
    }
    setId(event.target.value);
    setName(event.target.value);
    setDone(event.target.value);

    dispatch(addToDoActionCreator({ id, name, done }));
  };

  return (
    <form noValidate autoComplete="off">
      <label htmlFor="id">ID:</label>
      <input type="text" id="id" />
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <label htmlFor="done">Done:</label>
      <input type="text" id="done" />
      <button onClick={addToDo}>Add</button>
    </form>
  );
};

export default FormToDo;
