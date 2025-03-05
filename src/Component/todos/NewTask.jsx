import classes from './NewTask.module.css'
import { TodosSlice } from '../../slicers/todo';
import { useDispatch } from 'react-redux'

export const NewTask = ({ addTask }) => {
  const { actions: { appendTask } } = TodosSlice;
  const dispatch = useDispatch();

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      const taskName = e.target.value.trim();
      if (taskName) {
        dispatch(appendTask(e.target.value));
        e.target.value = "";
      }
    }
  }

  return (
    <input className={classes.input} onKeyDown={handleEnter} />
  )
}