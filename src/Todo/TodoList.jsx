import { IoMdCheckboxOutline } from "react-icons/io"
import { TiDeleteOutline } from "react-icons/ti"

// eslint-disable-next-line react/prop-types
export const TodoList=({data,checked, onhandledelete,onhandleCheck})=>{

    return(
        <li className="todo-item">
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <button className="check-btn" onClick={()=>onhandleCheck(data)}>
            <IoMdCheckboxOutline/>
        </button>
        <button className="delete-btn" onClick={() => onhandledelete(data)}>
            <TiDeleteOutline/>
        </button>
    </li>
    )
}