import { Task } from './Task'
import { TodosSlice } from '../../slicers/todo';
import { useSelector } from 'react-redux';

export const TaskList = () => {
  const { selectors: { getTasks } } = TodosSlice;
  const tasks = useSelector(getTasks);

  return (
    <ul>
      { tasks.map((task) => <Task task={task} />) }
    </ul>
  )
}