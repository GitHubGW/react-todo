import { useRecoilValue } from "recoil";
import { filteredTodoState, ToDoInterface } from "../atoms";
import SelectForm from "./SelectForm";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

export default function ToDoList() {
  const filteredTodo: ToDoInterface[] = useRecoilValue(filteredTodoState);

  return (
    <div>
      <h1>✏️ To Do List</h1>
      <SelectForm />
      <ToDoForm />
      {filteredTodo.map((todo: ToDoInterface) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
