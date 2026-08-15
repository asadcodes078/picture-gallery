import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Components/Card'

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
        <div className="flex flex-wrap gap-4 justify-center h-[90%]" >
        {printUserData}
         </div>
          <div className=" flex justify-center mb-2">
          <button className='bg-amber-600 text-black text-sm ml-4 mt-5 rounded-lg active:scale-95 py-3 px-2 font-semibold active:scale-90 text-sm'
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
            }
          }}
          >previous</button>
         <h4 className='mt-7 ml-2 font-semibold'>Page{index}</h4>
          <button className='bg-amber-600 text-black text-sm ml-4 mt-5 rounded-lg active:scale-95 py-3 px-5 text-sm font-semibold active:scale-90'
          onClick={()=>{
            setIndex(index+1)
          }}
          >next</button>
        </div>
    </div>
      </div>
        
  )
}

export default App
