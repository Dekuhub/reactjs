import classes from './component.module.css'
export const Button = ({children}) => {
    return (
        <button className={classes.button}>
            {children}
        </button>
    )
}

export const H1 = function({text="trem"}) {
    return (
        <h1>{text}</h1>
    )
} 
export const Main = ({children}) => {
    return (
        <main className={classes.main}>
            {children}
        </main>
    )
}
