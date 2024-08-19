import { useState } from "react"


// eslint-disable-next-line react/prop-types
export const TodoForm=({onAddtodo})=>{
    const [inputValue,setInputVale]=useState({})

    const handleInputChange= (value)=>{
        setInputVale({id:value, content:value, checked:false})
    };

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        onAddtodo(inputValue);
        
        setInputVale({id:"", content: "", checked:false})
    }

    return(
        <section className="form">
        <form onSubmit={handleFormSubmit}>
            <div>
            <input type="text" 
            className="todo-input" 
            autoComplete="off" 
            value={inputValue.content}
            onChange={(event)=>handleInputChange(event.target.value)}
            />
            </div>
            <div>
                <button type="submit" className="todo-btn text-black">
                    Add Task
                </button>
            </div>
        </form>
    </section>
    )

}