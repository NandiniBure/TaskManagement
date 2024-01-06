import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (     
        <form className="" onSubmit={onFormSubmit}>
        <div className="  flex justify-center " >
            <input  
                placeholder="Enter new todo..."
                className="mt-[6rem] p-2 rounded-lg  sm:w-[40rem] md:w-[60rem] "
                onChange={onInputChange}
                value={text}
            />
            </div>
        </form>
    )
}

export default TodoForm;