import React from 'react';
import UniversalView from './ui/UniversalView';
import { Task } from '@/api/client';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => Promise<void>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <UniversalView style="text-center py-4 text-gray-500">
        No tasks yet. Add one above!
      </UniversalView>
    );
  }

  return (
    <UniversalView>
      {tasks.map((task) => (
        <UniversalView
          key={task.id}
          style="flex items-center justify-between p-4 border-b last:border-b-0"
        >
          <UniversalView style="flex items-center">
            <span className={task.completed ? "text-gray-500 line-through" : ""}>
              {task.description}
            </span>
          </UniversalView>
          <UniversalView style="flex space-x-2">
            <button
              onClick={() => onDeleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </UniversalView>
        </UniversalView>
      ))}
    </UniversalView>
  );
};

export default TaskList;