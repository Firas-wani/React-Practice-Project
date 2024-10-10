import React, { useEffect, useState } from 'react'

const Github =()=> {
    const [data, setData] = useState([]);
    useEffect(()=>{
       
         fetch("https://api.github.com/users/Firas-wani")
         .then(response => response.json())
         .then(data => {
console.log(data);
setData(data)
         })
    },[])
  return (
    <>
    <div className='text-center m-4 bg-red-600 text-white p-4 text-3xl '>Github followers: {data.followers} 
        <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
    </>
  )
}

export default Github



