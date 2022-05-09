import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoActionCreator } from "../../redux/feature/toDoSlice";

const FormToDo = () => {
  const dispatch = useDispatch;

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const addToDo = (event) => {
    event.preventDefault();
    const newToDo = {
      id: id,
      name: name,
      done: done,
    };
    dispatch(addToDoActionCreator(newToDo));
  };

  return (
    <form noValidate autoComplete="off">
      <label htmlFor="id">ID:</label>
      <input
        onChange={(event) => setId(event.target.value)}
        type="text"
        id="id"
      />
      <label htmlFor="name">Name:</label>
      <input
        onChange={(event) => setName(event.target.value)}
        type="text"
        id="name"
      />
      <label htmlFor="done">Done:</label>
      <input
        onChange={(event) => setDone(event.target.value)}
        type="text"
        id="done"
      />
      <button onClick={addToDo}>Add</button>
    </form>
  );
};

export default FormToDo;
