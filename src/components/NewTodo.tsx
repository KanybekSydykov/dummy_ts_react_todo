import { useRef,useContext } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";

const NewTodo:React.FC = () => {
const inputRef = useRef<HTMLInputElement>(null)
const todosCtx = useContext(TodosContext);
const formSubmitHandler = (e:React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value
    if(enteredText.trim().length === 0){
        ////throw an error
        return;
    }
    todosCtx.addTodo(enteredText)
    inputRef.current!.value = '';

}

return <form onSubmit={formSubmitHandler} className={classes.form}>
    <label htmlFor="text">Todo Text</label>
    <input ref={inputRef} type="text" id="text"/>
    <button>Add Todo</button>
</form>
}

export default NewTodo