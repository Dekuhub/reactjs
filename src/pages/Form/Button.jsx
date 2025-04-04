import classes from './Button.module.css';

export const Button = ({ onClick, children }) => {
  return (
    <div>
      <button className={classes.button} onClick={onClick}>{children}</button>
    </div>
  );
};