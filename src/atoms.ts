import { atom, RecoilValueReadOnly, selector } from "recoil";

export const TODO_LIST = "TODO_LIST";

export enum Category {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
  ETC = "ETC",
}

export interface ToDoInterface {
  id: number;
  text: string;
  category: Category;
}

const getLocalStorageTodoList = (): ToDoInterface[] => {
  const storedTodoList = localStorage.getItem(TODO_LIST);
  return storedTodoList ? JSON.parse(storedTodoList) : [];
};

export const categoryState = atom<ToDoInterface["category"]>({
  key: "categoryState",
  default: Category.TODO,
});

export const todoState = atom<ToDoInterface[]>({
  key: "todoState",
  default: getLocalStorageTodoList(),
});

export const filteredTodoState: RecoilValueReadOnly<ToDoInterface[]> = selector({
  key: "filteredTodoState",
  get: ({ get }): ToDoInterface[] => {
    const category: ToDoInterface["category"] = get(categoryState);
    const todo: ToDoInterface[] = get(todoState);
    return todo.filter((todoItem: ToDoInterface) => todoItem.category === category);
  },
});
