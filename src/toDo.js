import { useEffect, useState } from "react";

function ToDo() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (eventu) => {
    setTodo(eventu.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return console.log("EMPTY");
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setTodo(""); //State를 직접적으로 수정할 수는 없다
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default ToDo;
