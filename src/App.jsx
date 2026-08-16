import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Components/Card'
import Button from './Components/Button'

const App = () => {
const [userData, setData] = useState([])
const [index, setIndex] = useState(1)
const data = async ()=>{

  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`)
    setData(response.data)
  }
  useEffect(function(){
    data()
  },[index])
let printUserData = <h2 className='text-gray-400 text-lg absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 '>Loading...</h2>
if(userData.length > 0){
  printUserData = userData.map(function(elem, index){
    return (
      <div key={index}>
        <Card elem={elem}/>
      </div>
      
    )
  })
}
  return (
    
      <div className="h-screen w-screen overflow-auto bg-zinc-900 text-white">
        <div>
         <Button
          index={index}
          setIndex={setIndex} 
          printUserData={printUserData}    
         />          
    </div>
      </div>
        
  )
}

export default App
