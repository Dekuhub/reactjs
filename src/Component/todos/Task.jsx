import { useDispatch } from 'react-redux';
import { TodosSlice } from '../../slicers/todo'
import classes from './Task.module.css'
import clsx from 'clsx'

export const Task = ({ task }) => {
  const { actions: { removeTask, toggleTask } } = TodosSlice;
  const dispatch = useDispatch();

  return (
    <li key={"todo-key-" + task.id} className={ clsx(classes.item, {[classes.done]: task.done}) }>
      <input id={"todo-" + task.id}
        checked={task.done}
        onChange={
          (e) => dispatch(toggleTask({ id: task.id, done: e.target.checked }))
        }
        className={classes.checkbox} type="checkbox" />
      <label htmlFor={"todo-" + task.id}>
        { task.task }
      </label>
      <span
        className={classes.cross}
        onClick={() => dispatch(removeTask(task.id))}>&times;</span>
    </li>
  )
}