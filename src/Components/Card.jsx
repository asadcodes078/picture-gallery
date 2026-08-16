import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank" rel="noreferrer">
        <div className=" mt-2 w-[300px] h-[280px] bg-zinc-800 rounded-lg overflow-hidden">
          <img src={props.elem.download_url} key={props.elem.author} className='w-full h-full object-cover overflow-hidden'/> 
          
        </div>
      </a>
      <h2 className='font-semibold'>{props.elem.author}</h2>
    </div>
  )
}

export default Card
