import React from 'react'

export default function SportsLink({title, date , by , img, points }) {
    
  return (
    <div>  

<a href='./' className="shadow-[0px_3px_8px_0px_#00000024]"> 
      <img
        src={img}
        alt={title}
        className="w-full h-40 md:h-30 object-cover"
      />
      <div className="text-gray-600 p-5 w-full">
        <h3 className="text-gray-700 text-lg md:text-xl mb-2 md:mb-3 font-Fredoka">
          {title}
        </h3>
        <p className="inline-block px-2 py-1 font-Fredoka text-lg ">{date}  </p>
       
      </div>
    </a> 
    </div>
  )
}
