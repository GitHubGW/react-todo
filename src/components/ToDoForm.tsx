import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil";
import { Category, categoryState, ToDoInterface, todoState, TODO_LIST } from "../atoms";

interface FormData {
  text: string;
}

export default function ToDoForm() {
  const { register, handleSubmit, setValue } = useForm<FormData>({ defaultValues: { text: "" } });
  const category: Category = useRecoilValue(categoryState);
  const setTodo: SetterOrUpdater<ToDoInterface[]> = useSetRecoilState(todoState);

  const onValid = useCallback(
    ({ text }: FormData) => {
      const newTodo = { id: Date.now(), text, category };
      setTodo((prevTodo) => {
        const updatedTodoList = [newTodo, ...prevTodo];
        localStorage.setItem(TODO_LIST, JSON.stringify(updatedTodoList));
        return updatedTodoList;
      });
      setValue("text", "");
    },
    [category, setTodo, setValue]
  );

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("text", {
          required: "To Do is required.",
        })}
        type="text"
        placeholder="Write a to do"
        style={{ borderColor: "white" }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
