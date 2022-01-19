import { useEffect, useState } from "react"
import { TodoInput } from "./TodoInput";
import { Todo } from "./todo";
const axios = require('axios');
function List({ handleUpdate, handleRemove, todos, updateTodo ,edit,setEdit ,handleEdit,setUpdate}) {



    if(edit.id)
    {

        return <TodoInput edit={edit} setEdit={setEdit} handleEdit={handleEdit} setUpdate={setUpdate} ></TodoInput>
    }

    return (
        <div>

            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                {todos.map((item, index) => (
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div key={item.id} >{item.title}</div>
                        <div onClick={() => handleUpdate(item.id)}>{item.status ? "Done" : "not done"}</div>
                        <div onClick={() => handleRemove(item.id)}>Remove</div>

                        <div onClick={() => {
                            
                            setEdit({
                                id:item.id,
                                title:item.title
                            })

                        }}>Edit</div>
                    </div>

                ))}
            </div>

        </div>
    )
}


export { List }