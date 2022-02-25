import { useRecoilValue } from "recoil";
import { ToDoInterface, todoState } from "../atoms";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  const todo: ToDoInterface[] = useRecoilValue(todoState);

  return (
    <div>
      <h1>✏️ To Dos</h1>
      <ToDoForm />
      <ul>
        {todo.map((todoItem: ToDoInterface) => (
          <ToDo key={todoItem.id} id={todoItem.id} category={todoItem.category} text={todoItem.text} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
