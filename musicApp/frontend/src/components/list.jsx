import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { addChoice } from "../store/action";
import { ADD_CHOICE } from "../store/actionTypes";
const axios = require('axios');

function AlbumsList()
{
    const history=useHistory();
    const dispatch= useDispatch();
    const store=useSelector(state=>state);
    console.log("state",store)

    const [albums,setAlbums]=useState([]);

    const [pages,setPages]=useState(0);

    let pgs=[];

    const [pag,setPag]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:2345/albums')
        .then(function (response) {
          // handle success
          console.log(response.data)
          setAlbums(response.data);
          console.log("albums",albums)

          setPages(Math.ceil(response.data.length/2))
        //   setPages(Math.ceil((response.data.length)/3))
          console.log(pages)
           
          for(var i=1;i<=pages;i++)
          {
              pgs.push(i)
          }

         
          setPag(pgs)
          console.log(pag)
       
          
        })
    },[])

    const getAlbum=(id)=>{

        const choice=axios.get(`http://localhost:2345/albums/${id}`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          dispatch(addChoice(response.data))
          history.push("/album")

        })

    }

    return(
        <div>
            <h3>List of albums</h3>
            <div>
                {albums.map((e)=>(
                    <div onClick={()=>{getAlbum(e._id)}}>
                     <img src="data:image/jpeg;base64,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"></img>   
                    <div>{e.album_name}</div>
                    <label>{e.artist}</label>
                    <label>  songs({e.songs.length})</label>
                    </div>
                    
                ))}
            </div>

            <div>
                <h1>Pagination</h1>
                <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
                    
                 {pag.map((e)=>(
                     <div key={Math.random} style={{width:"20px",height:"20px",border:"1px solid black"}}>{e}</div>
                 ))}
                </div>
            </div>
        </div>
    )
}


export {AlbumsList}