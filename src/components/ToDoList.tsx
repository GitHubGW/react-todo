import { useRecoilValue } from "recoil";
import { filteredTodoState, ToDoInterface } from "../atoms";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  const [filterdTodo, filterdDoing, filterdDone] = useRecoilValue<ToDoInterface[][]>(filteredTodoState);

  return (
    <div>
      <h1>✏️ To Dos</h1>
      <ToDoForm />
      <div>
        <h1>To Do</h1>
        <ul>
          {filterdTodo.map((todoItem: ToDoInterface) => (
            <ToDo key={todoItem.id} id={todoItem.id} category={todoItem.category} text={todoItem.text} />
          ))}
        </ul>

        <h1>Doing</h1>
        <ul>
          {filterdDoing.map((todoItem: ToDoInterface) => (
            <ToDo key={todoItem.id} id={todoItem.id} category={todoItem.category} text={todoItem.text} />
          ))}
        </ul>

        <h1>Done</h1>
        <ul>
          {filterdDone.map((todoItem: ToDoInterface) => (
            <ToDo key={todoItem.id} id={todoItem.id} category={todoItem.category} text={todoItem.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
