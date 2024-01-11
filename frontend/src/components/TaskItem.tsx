import React from "react";
import type { Task } from "src/api/tasks";
import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <div className={styles.item}>
      {/* render CheckButton here */}
      <CheckButton
        checked={task.isChecked}
      />
      <div className= {styles.textContainer}>
        <span>{task.title}</span>
        {task.description && <span>{task.description}</span>}
      </div>
    </div>
  );
}