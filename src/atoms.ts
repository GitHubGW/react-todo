import { atom, RecoilValueReadOnly, selector } from "recoil";

export enum Category {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

export interface ToDoInterface {
  id: number;
  text: string;
  category: Category;
}

export const categoryState = atom<ToDoInterface["category"]>({ key: "categoryState", default: Category.TODO });

export const todoState = atom<ToDoInterface[]>({ key: "todoState", default: [] });

export const filteredTodoState: RecoilValueReadOnly<ToDoInterface[]> = selector({
  key: "filteredTodoState",
  get: ({ get }): ToDoInterface[] => {
    const category: ToDoInterface["category"] = get(categoryState);
    const todo: ToDoInterface[] = get(todoState);
    return todo.filter((todoItem: ToDoInterface) => todoItem.category === category);
  },
});
