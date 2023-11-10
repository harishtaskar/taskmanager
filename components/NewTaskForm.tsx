"use client";
import { taskListState } from "@/store";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

const NewTaskForm = () => {
  const setTaskList = useSetRecoilState(taskListState);
  const [input, setInput] = useState<string>("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };
  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTaskList((prev) => [
      ...prev,
      {
        task: input,
        isCompleted: false,
        id: `${Math.round(Math.random() * 10000)}`,
        isDeleteVisible: false,
      },
    ]);
    setInput("");
  };
  return (
    <>
      <form
        className="w-full flex text-center justify-center flex-col  p-4 border border-slate-50 rounded-2xl"
        method="Post"
      >
        <span className="text-4xl font-extrabold mb-2 text-yellow-p text-start">
          Add Your Task
        </span>
        <Input
          value={input}
          type="email"
          variant={"bordered"}
          label={"Your Task"}
          className="bg-none my-2"
          onChange={onChangeHandler}
        />
        <Button
          color="primary"
          className="text-base bg-yellow-p my-4 h-12"
          type="submit"
          onClick={submitHandler}
        >
          Add Task
        </Button>
      </form>
    </>
  );
};

export default NewTaskForm;
