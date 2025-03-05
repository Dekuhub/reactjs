import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewTask } from './NewTask'
import { TaskList } from './TaskList'
import { TodosSlice } from '../../slicers/todo';

export const Todos = () => {
  const {
    selectors: { getTasks },
    actions: { setTasks },
  } = TodosSlice;

  const dispatch = useDispatch();

  const tasks = useSelector(getTasks);

  useEffect(() => {
    if (!tasks || tasks.length < 1) {
      fetch('http://localhost:3000/tasks').
        then((resp) => resp.json()).
        then((data) => dispatch(setTasks(tasks)));
    }
  }, []);

  return (
    <>
      <NewTask />
      <TaskList />
    </>
  )
}