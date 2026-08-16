import React from 'react'

const Button = ({index,setIndex,printUserData}) => {
  return (
    <div>
        <div className="flex flex-wrap gap-4 justify-center h-[90%]" >
                {printUserData}
                 </div>
      <div className=" flex justify-center mb-2">
          <button index={index} setIndex={setIndex} className='bg-amber-600 text-black text-sm ml-4 mt-5 rounded-lg active:scale-95 py-3 px-2 font-semibold active:scale-90 text-sm'
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
  )
}

export default Button
