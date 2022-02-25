import { useForm } from "react-hook-form";
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil";
import { filteredTodoState, ToDoInterface, todoState } from "../atoms";

interface FormData {
  text: string;
}

const ToDoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: { text: "" },
  });
  const setTodo: SetterOrUpdater<ToDoInterface[]> = useSetRecoilState(todoState);
  const filteredTodo: ToDoInterface[][] = useRecoilValue(filteredTodoState);
  console.log("filteredTodo", filteredTodo);

  const onValid = ({ text }: FormData) => {
    setTodo((todo: ToDoInterface[]) => [{ id: Date.now(), text, category: "TODO" }, ...todo]);
    setValue("text", "");
  };

  const onInvalid = (error: typeof errors) => {};

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input {...register("text", { required: "To Do is required." })} type="text" placeholder="Write a to do" />
      <button type="button">Add</button>
    </form>
  );
};

export default ToDoForm;
