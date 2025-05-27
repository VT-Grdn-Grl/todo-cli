import React, { useState, useEffect } from 'react';
import TaskList from '@/components/TaskList';
import AddTaskForm from '@/components/AddTaskForm';
import Logo from '@/components/Logo';
import UniversalView from '@/components/ui/UniversalView';
import { taskApi, Task } from '@/api/client';  // Update import path if needed

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load tasks from API on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      try {
        const fetchedTasks = await taskApi.getTasks();
        setTasks(fetchedTasks);
      } catch (err) {
        setError('Failed to load tasks');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTasks();
  }, []);

  const addTask = async (description: string) => {
    try {
      const newTask = await taskApi.createTask(description);
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      setError('Failed to add task');
      console.error(err);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await taskApi.deleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
    }
  };

  return (
    <UniversalView style="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <UniversalView style="container mx-auto px-4 py-8 max-w-2xl">
        <Logo />
        
        {error && (
          <UniversalView style="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </UniversalView>
        )}
        
        <UniversalView variant="card" padding="md" margin="md" style="animate-scale-in">
          <AddTaskForm onAddTask={addTask} />
        </UniversalView>
        
        <UniversalView variant="card" padding="md" style="animate-scale-in">
          {isLoading ? (
            <UniversalView style="flex justify-center py-4">
              Loading tasks...
            </UniversalView>
          ) : (
            <TaskList tasks={tasks} onDeleteTask={deleteTask} />
          )}
        </UniversalView>
      </UniversalView>
    </UniversalView>
  );
};

export default Index;
