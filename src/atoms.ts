import { atom } from "recoil";

export interface ToDoInterface {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

export const todoState = atom<ToDoInterface[]>({ key: "todoState", default: [] });
