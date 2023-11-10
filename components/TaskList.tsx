"use client";
import { taskListState } from "@/store";
import { Button, Checkbox } from "@nextui-org/react";
import React from "react";
import { useRecoilState } from "recoil";

const TaskList = () => {
  const [taskList, setTaskList] = useRecoilState(taskListState);
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    console.log(taskList);
    const newtaskList: todo[] = taskList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      } else {
        return item;
      }
    });

    setTaskList(newtaskList);
  };

  const onDeleteClikedHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const newtaskList: todo[] = taskList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDeleteVisible: !item.isDeleteVisible,
        };
      } else {
        return item;
      }
    });

    setTaskList(newtaskList);
  };

  const onDeleteHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const newtaskList: todo[] = taskList.filter((item) => {
      return item.id !== id;
    });
    setTaskList(newtaskList);
  };
  return (
    <ul className="flex gap-7 py-8 cursor-pointer flex-wrap">
      {taskList?.map((item, index) => {
        return (
          <li
            key={index}
            onClick={(e) => onDeleteClikedHandler(e, item.id)}
            draggable={true}
            className={`bg-yellow-p text-lg ${
              item.isCompleted ? "text-grey" : "text-black"
            } relative w-fit h-fit px-3 py-4 rounded-md max-w-[19rem] text-left flex`}
          >
            <Checkbox
              onChange={(e) => onChangeHandler(e, item.id)}
              className="items-start mt-0.5"
              isSelected={item.isCompleted}
            />
            <span className="text-left relative text-xs sm:text-lg">
              {item.task}
            </span>

            <Button
              onClick={(e) => onDeleteHandler(e, item.id)}
              className={`bg-red right-[0%] top-[0%]  z-20 h-full rounded-l-none rounded-r-md absolute ease-in-out animate-appearance-in ${
                item.isDeleteVisible ? "flex" : "hidden"
              }`}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
