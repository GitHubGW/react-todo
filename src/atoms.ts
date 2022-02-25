import { atom, RecoilValueReadOnly, selector } from "recoil";

export interface ToDoInterface {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

export const todoState = atom<ToDoInterface[]>({ key: "todoState", default: [] });

export const filteredTodoState: RecoilValueReadOnly<ToDoInterface[][]> = selector({
  key: "filteredTodoState",
  get: ({ get }): ToDoInterface[][] => {
    const todo: ToDoInterface[] = get(todoState);
    const filterdTodo: ToDoInterface[] = todo.filter((todoItem: ToDoInterface) => todoItem.category === "TODO");
    const filterdDoing: ToDoInterface[] = todo.filter((todoItem: ToDoInterface) => todoItem.category === "DOING");
    const filterdDone: ToDoInterface[] = todo.filter((todoItem: ToDoInterface) => todoItem.category === "DONE");
    return [filterdTodo, filterdDoing, filterdDone];
  },
});
