import { useEffect, useState } from "react";
const axios = require('axios');
function SearchInput({setShowModal,setChoice,choice})
{
    const [query,setQuery]=useState("");
    const [data,setData]=useState([]);

    // const [choice,setChoice]=useState("");
    const [show,setShow]=useState(false);
    useEffect(()=>{

        getData();
    },[query])

    const getData=async()=>{

        const data=await axios.get('http://localhost:3004/country-names')
     .then(function (response) {
    
    // console.log("res",response.data)
    // console.log("query")
    const temp=response.data
        // console.log("temp",temp);
//arr.filter(x => x.title.toLowerCase().includes(searchStr.toLowerCase()))  //way of getting partial matches as well
        const data=temp.filter(x => x.country.toLowerCase().includes(query.toLowerCase()))
        console.log("data",data)

        setData(data)
     })
    }


    return (
        <div>
            <input placeholder="Search for country" onChange={(e)=>{
                    if(e.target.value.length>2)
                    {
                        setQuery(e.target.value); 
                    }
                  
            }}></input>
            <div >
                {data.map((e)=>(
                    <div>
                        <p onClick={()=>{
                       
                            setChoice(e.country)
                            setShowModal(prev => !prev)
                            console.log("choice",choice)
                        }}>{e.country}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}


export {SearchInput}