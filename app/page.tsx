"use client";
import NewTaskForm from "@/components/NewTaskForm";
import TaskList from "@/components/TaskList";
import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="min-h-[100vh]">
      <Button
        onPress={onOpen}
        className="border-yellow-p text-yellow-p w-full sm:w-fit"
        variant="bordered"
      >
        Add Task
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>{<NewTaskForm />}</ModalContent>
      </Modal>
      <TaskList />
    </section>
  );
};

export default Home;
