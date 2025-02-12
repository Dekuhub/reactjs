import classes from './component.module.css'

export const Inp = ({color, setColor}) => {
    return(
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className={classes.input}></input>
    )
}