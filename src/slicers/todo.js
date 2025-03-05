import { createSlice } from '@reduxjs/toolkit'

const localStorageKey = 'todos/items';

const initialState = () => {
  try {
    const storageTasks = JSON.parse(
      localStorage.getItem(localStorageKey));
    return { tasks: storageTasks }
  } catch (err) {
    return { tasks: [] };
  }
}

const storeTasks = (tasks) => {
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
}

export const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      const tasks = action.payload;
      state.tasks = tasks;
      storeTasks(state.tasks);
    },
    appendTask: (state, action) => {
      const name = action.payload;
      const { tasks } = state;
      const maxFoundId = Math.max(1, ...tasks.map(({ id }) => id));
      state.tasks.push({
        id: maxFoundId + 1,
        done: false,
        task: name
      });
      storeTasks(state.tasks);
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter(({ id }) => id !== taskId);
      storeTasks(state.tasks);
    },
    toggleTask: (state, action) => {
      const { id: taskId, done: taskDone } = action.payload;
      state.tasks = state.tasks.map((task) => {
        return task.id === taskId ? {
          ...task, done: taskDone,
        } : task;
      })
      storeTasks(state.tasks);
    },
  },
  selectors: {
    getTasks: (state) => state.tasks,
  }
});