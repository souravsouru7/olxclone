import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div className='flex mt-5 mx-5'>
        <img src={location?.state?.data.image} style={{ width: '700px', height: '600px' }}/>
        <div className='mx-4 mt-4'>
            <h1 className='font-bold text-3xl'>Price: $ {location?.state?.data?.price}</h1>
            <h1 className='font-bold mt-5'><span>Category</span> : {location?.state?.data?.category}</h1>
            <h1 ><span className='font-semibold mt-5'>Title</span> :{location?.state?.data?.title}</h1>
            <h1 ><span className='font-semibold mt-5'>Description</span> :{location?.state?.data?.description}</h1>
        </div>
    </div>
  )
}

export default Details