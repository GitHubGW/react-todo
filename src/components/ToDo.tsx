import { useCallback } from "react";
import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { Category, ToDoInterface, todoState, TODO_LIST } from "../atoms";

export default function ToDo({ id, text, category }: ToDoInterface) {
  const setTodo: SetterOrUpdater<ToDoInterface[]> = useSetRecoilState(todoState);

  const handleChangeCategory = useCallback(
    (category: Category) => {
      setTodo((prevTodo) => {
        const foundTodo = prevTodo.find((todo) => todo.id === id);
        if (!foundTodo) {
          return prevTodo;
        }
        const updatedTodo = { ...foundTodo, category };
        const updatedTodoList = prevTodo.map((todo) => (todo.id === id ? updatedTodo : todo));
        localStorage.setItem(TODO_LIST, JSON.stringify(updatedTodoList));
        return updatedTodoList;
      });
    },
    [id, setTodo]
  );

  const handleDeleteTodoItem = useCallback(
    (id: number) => {
      setTodo((prevTodo) => {
        const filteredTodo = prevTodo.filter((todo) => todo.id !== id);
        localStorage.setItem(TODO_LIST, JSON.stringify(filteredTodo));
        return filteredTodo;
      });
    },
    [setTodo]
  );

  return (
    <li>
      <span style={{ marginRight: "30px", fontSize: "18px", fontWeight: "bold" }}>{text}</span>
      {Object.values(Category).map(
        (value) =>
          category !== value && (
            <button key={value} type="button" onClick={() => handleChangeCategory(value)} style={{ marginRight: "5px" }}>
              {value}
            </button>
          )
      )}
      <button style={{ margin: "5px" }} onClick={() => handleDeleteTodoItem(id)}>
        ❎
      </button>
    </li>
  );
}
