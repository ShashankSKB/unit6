import { useEffect, useState } from "react"
const axios = require('axios');
function Modal({showModal,choice})
{

    const [country,setCountry]=useState("")
    
    const [capital,setCapital]=useState("")

    useEffect(()=>{
        getChoice()
    })


    const getChoice=async()=>{
        await axios.get('http://localhost:3004/country-names')
        .then(function (response) {
    
            const temp=response.data
              console.log("temp mpdal",temp)
            console.log("modal choice",choice)
                const data=temp.filter(x => x.country.toLowerCase() === choice.toLowerCase())
                console.log("data",data)

                if(data)
                {
                    setCapital(data[0].city)
                    setCountry(data[0].country)

                    console.log("country",country);
                }
               
             })
    }

    return showModal ?(
        <div>
            <h1>Country:{country}</h1>
            <h3>Capital:{capital}</h3>      
          </div>
    ):null
}


export {Modal}