import React, { useEffect, useState } from "react";
import { getAllTasks, type Task } from "src/api/tasks";
import { TaskItem } from "src/components";
import styles from "src/components/TaskList.module.css";

export interface TaskListProps {
  title: string;
}

export function TaskList({ title }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getAllTasks().then((result) => { 
        console.log(result);
        if (result.success) {
            setTasks(result.data);
            // console.log(tasks.length)
        } else {
            alert(result.error);
        }
    });
  }, []);

  return (
    <div className={styles.listOuter}>
      <span className={styles.title}>{title}</span>
      <div className={styles.listTasks}> 
        { tasks.length === 0 ? (
          <p>Nothing Here</p>
        ) : (
            tasks.map((task) => (
              <ul key={task._id}>
                <TaskItem task={task} />
              </ul>
            ))
          )}
      </div>
    </div>
  );
}