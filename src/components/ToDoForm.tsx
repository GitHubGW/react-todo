import { useForm } from "react-hook-form";
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil";
import { Category, categoryState, ToDoInterface, todoState } from "../atoms";

interface FormData {
  text: string;
}

export default function ToDoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: { text: "" },
  });
  const todo: ToDoInterface[] = useRecoilValue(todoState);
  const setTodo: SetterOrUpdater<ToDoInterface[]> = useSetRecoilState(todoState);
  const category: Category = useRecoilValue(categoryState);

  const onValid = ({ text }: FormData): void => {
    const newTodo = { id: Date.now(), text, category };
    setTodo((todo: ToDoInterface[]) => [newTodo, ...todo]);
    setValue("text", "");
    localStorage.setItem("TODO_LIST", JSON.stringify([newTodo, ...todo]));
  };

  const onInvalid = (error: typeof errors): void => {};

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input {...register("text", { required: "To Do is required." })} type="text" placeholder="Write a to do" style={{ borderColor: "white" }} />
      <button type="button">Add</button>
    </form>
  );
}
