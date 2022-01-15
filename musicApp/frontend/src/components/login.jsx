import { useState } from "react"
const axios = require('axios');
function Login()
{

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const checkLogin=()=>{

        const data=axios.post('/http://localhost:2345/artist/signin', {
            username: username,
            password: password,
          })

          if(data)
          {
              if(data.username==username)
              alert("successflly logged in")
          }
          else{
              alert("invalid id or password")
          }
        
    }
    return (
        <div>
            <p>USERNAME</p>
            <input placeholder="enter Username" onChange={(e)=>{
                setUsername(e.target.vale)
            }}></input>
            <input placeholder="enter password" onChange={(e)=>{
                setPassword(e.target.vale)
            }}></input>
            <button onClick={checkLogin}> Log in</button>
        </div>
    )
}

export {Login}