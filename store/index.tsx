import { atom } from "recoil";



export const taskListState = atom({
  key: "tasklist",
  default: [] as todo[],
});
