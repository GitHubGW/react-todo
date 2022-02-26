import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { Category, ToDoInterface, todoState } from "../atoms";

const ToDo = ({ id, category, text }: ToDoInterface) => {
  const setTodo: SetterOrUpdater<ToDoInterface[]> = useSetRecoilState(todoState);

  const handleChangeCategory = (category: Category): void => {
    setTodo((todo: ToDoInterface[]) => {
      const foundTodoIndex: number = todo.findIndex((todoItem: ToDoInterface) => todoItem.id === id);
      const frontTodo: ToDoInterface[] = todo.slice(0, foundTodoIndex);
      const backTodo: ToDoInterface[] = todo.slice(foundTodoIndex + 1);
      const newTodo: ToDoInterface = { id, text, category };
      const newTodoList: ToDoInterface[] = [...frontTodo, newTodo, ...backTodo];
      return newTodoList;
    });
  };

  const handleDeleteTodoItem = (id: number): void => {
    return setTodo((todo: ToDoInterface[]) => todo.filter((todoItem: ToDoInterface) => todoItem.id !== id));
  };

  return (
    <li>
      <span style={{ marginRight: "30px" }}>{text}</span>
      {category !== Category.TODO && (
        <button style={{ margin: "5px" }} onClick={() => handleChangeCategory(Category.TODO)}>
          To Do
        </button>
      )}
      {category !== Category.DOING && (
        <button style={{ margin: "5px" }} onClick={() => handleChangeCategory(Category.DOING)}>
          Doing
        </button>
      )}
      {category !== Category.DONE && (
        <button style={{ margin: "5px" }} onClick={() => handleChangeCategory(Category.DONE)}>
          Done
        </button>
      )}
      <button style={{ margin: "5px" }} onClick={() => handleDeleteTodoItem(id)}>
        ❎
      </button>
    </li>
  );
};

export default ToDo;
