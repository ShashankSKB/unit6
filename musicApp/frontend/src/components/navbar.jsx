import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom";
import { addChoice } from "../store/action";
const axios = require('axios');
function Navbar()
{

    const [text,setText]=useState("");
    const [data,setData]=useState([]);
    const history=useHistory();
    const dispatch= useDispatch();
    const handleChange=()=>{

        const data=axios.get('http://localhost:2345/albums/')
        .then(function (response) {
          // handle success
          console.log(response.data)
        //   setData(response.data);

        const temp=response.data
        const samp=temp.filter(x => x.artist.toLowerCase().includes(text.toLowerCase()))
        setData(samp) 
        })
    
    }


    const getAlbum=(id)=>{

        const choice=axios.get(`http://localhost:2345/albums/${id}`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          dispatch(addChoice(response.data))
          history.push("/album")

        })

    }
    return (
        <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
            <div>
                <input placeholder="Search for artist" type={Text} onChange={(e)=>{
                setText(e.target.value)
                handleChange();
            }}></input>
            
           {text.length>1 && <div>
           {data.map((e)=>(
               <div onClick={()=>{getAlbum(e._id)}}>{e.album_name}</div>
           ))}
            </div>}

            </div>
            

            <div ><Link to="/login">Login </Link></div>
        </div>
    )
}


export {Navbar}