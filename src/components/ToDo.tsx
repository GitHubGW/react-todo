import { ToDoInterface } from "../atoms";

const ToDo = ({ id, category, text }: ToDoInterface) => {
  return (
    <li>
      <span>
        {category}: {text}
      </span>
      <button>To Do</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
};

export default ToDo;
