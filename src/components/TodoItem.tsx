import classes from './TodoItem.module.css'

const TodoItem:React.FC<{text:string,id:string,onRemove:()=>void}> =(props )=> {
    
    // const removeTodo = (e:React.SyntheticEvent) => {
    //     props.removeItem(props.id)
    // }
    

    return (
        <li className={classes.item} id={props.id} onClick={props.onRemove}>{props.text}</li>
    )
}

export default TodoItem