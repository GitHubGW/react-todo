import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { ToDoInterface, todoState } from "../atoms";

const ToDo = ({ id, category, text }: ToDoInterface) => {
  const setTodo: SetterOrUpdater<ToDoInterface[]> = useSetRecoilState(todoState);

  const handleChangeCategory = (category: ToDoInterface["category"]) => {
    setTodo((todo: ToDoInterface[]) => {
      const foundTodoIndex: number = todo.findIndex((todoItem: ToDoInterface) => todoItem.id === id);
      const frontTodo: ToDoInterface[] = todo.slice(0, foundTodoIndex);
      const backTodo: ToDoInterface[] = todo.slice(foundTodoIndex + 1);
      const newTodo: ToDoInterface = { id, text, category };
      const newTodoList: ToDoInterface[] = [...frontTodo, newTodo, ...backTodo];
      return newTodoList;
    });
  };

  return (
    <li>
      <span>
        {id}: {category}: {text}
      </span>
      {category !== "TODO" && <button onClick={() => handleChangeCategory("TODO")}>To Do</button>}
      {category !== "DOING" && <button onClick={() => handleChangeCategory("DOING")}>Doing</button>}
      {category !== "DONE" && <button onClick={() => handleChangeCategory("DONE")}>Done</button>}
    </li>
  );
};

export default ToDo;
