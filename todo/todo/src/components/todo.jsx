import { TodoInput } from "./TodoInput";
import { List } from "./TodoList";
import { useState } from "react";
function Todo() {

    const [todos, setTodos] = useState([]);

    const [updateText, setUpdatetext] = useState("")


    const setUpdate = (text) => {
        setUpdatetext(text)
    }

    const [edit, setEdit] = useState({
        id: null,
        title: ""
    })


    const handleUpdate = (id) => {

        const newTodo = todos.map((e) => {
            if (e.id == id) {
                e.status = !e.status;

                return e
            }
        })


        setTodos(newTodo);

    }

    const handleRemove = (id) => {

        const newTodo = todos.filter((e) => e.id != id)
        setTodos(newTodo);

    }

    const handleAdd = (task) => {

        if (task.title == "") {
            return
        } else {
            const newtasks = [task, ...todos]

            setTodos(newtasks);
            console.log(todos)

        }

    }

    const handleEdit = (item) => {

        console.log("item to edit", edit)
        // const afterEdit=todos.map((e)=>
        // {
        //     if(e.id==item.id)
        //     {
        //         e.title=item.title

        //         return e;
        //     }
        // })

        // setTodos(...afterEdit);

        setTodos(prev => prev.map((e) => {
            if (item.id === e.id) {
                console.log("e", e)
                e.title = updateText
                console.log("e", e)
                return e
            }

            return e;
        }));

        setEdit({
            id: null,
            title: ""
        })
    }



    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoInput handleAdd={handleAdd} todos={todos} handleEdit={handleEdit} updateText={updateText} setUpdate={setUpdate} ></TodoInput>
            <List handleUpdate={handleUpdate} handleRemove={handleRemove} todos={todos} edit={edit} setEdit={setEdit} handleEdit={handleEdit} setUpdate={setUpdate}></List>
        </div>
    )
}

export { Todo }