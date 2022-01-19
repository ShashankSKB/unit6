import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./input.css";

function TodoInput({ handleAdd,edit,handleEdit,setUpdate}) {

    const [task, setTask] = useState(edit ? edit.title :"");

    const ref = useRef(null);

    useEffect(() => {
        ref.current.focus();
    })

    const handleChange = (e) => {
        setTask(e.target.value)

        console.log("task", task)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleAdd({
            id: Math.random(),
            title: task,
            status: false
        })

        setTask("");

    }


    // const handleedittext=(e)=>{

    //     setUpdate(e.target.value);
    // }



    return (
        <div>
            <>
                {edit ? (
                    <>

                        <input type="text" placeholder="update ur todo" ref={ref}  onChange={(e) => setUpdate(e.target.value)} ></input>
                        <button onClick={()=>handleEdit(edit)} >
                            Update
                        </button>

                    </>
                ) : (
                    <>
                        <input type="text" placeholder="What do u want to do" ref={ref} onChange={(e) => handleChange(e)} value={task} ></input>
                        <button onClick={handleSubmit} >
                            Add
                        </button>
                    </>

                )


                }
            </>
        </div>
    )
}

export { TodoInput }