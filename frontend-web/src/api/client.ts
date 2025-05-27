import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export const api = axios.create({
  baseURL: API_URL,
});

export interface Task {
  id: number;
  description: string;
  completed: boolean;
  created_at: string;
}

export const taskApi = {
  getTasks: async (): Promise<Task[]> => {
    const response = await api.get('/tasks');
    return response.data;
  },

  createTask: async (description: string): Promise<Task> => {
    const response = await api.post('/tasks', { description, completed: false });
    return response.data;
  },

  updateTask: async (id: number, completed: boolean): Promise<Task> => {
    const response = await api.put(`/tasks/${id}`, { completed });
    return response.data;
  },

  deleteTask: async (id: number): Promise<void> => {
    await api.delete(`/tasks/${id}`);
  },
};
