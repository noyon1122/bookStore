import React from 'react'

function Cards({item}) {
  return (
  <>
  <div className='mt-4 my-2 mr-2'>
    <div className="card  bg-gray-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
    <div className='container w-full text-center flex justify-center items-center mt-4'>
  <img 
    className='mx-auto h-72 w-64 rounded-md'
    src={item.image}
    alt="Book" 
  />
</div>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default Cards