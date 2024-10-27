import React from 'react';


const Menubar = (props) => {
  return (
    <div className='flex shadow-sm h-10 p-2'>
        <h1 onClick={()=> props?.setMenu('Shirt')} className='ml-48 cursor-pointer'>Shirt</h1>
        <h1 onClick={()=> props?.setMenu('Jacket')} className='ml-5 cursor-pointer'>Jacket</h1>
        <h1 onClick={()=> props?.setMenu('Monitor')} className='ml-5 cursor-pointer'>Monitor</h1>
        <h1 onClick={()=> props?.setMenu('Gold')} className='ml-5 cursor-pointer'>Gold</h1>
        <h1 onClick={()=> props?.setMenu('Scooters')} className='ml-5 cursor-pointer'>Scooters</h1>
        <h1 onClick={()=> props?.setMenu('Bike')} className='ml-5 cursor-pointer'>Bike</h1>
        <h1 onClick={()=> props?.setMenu('Appartment')} className='ml-5 cursor-pointer'>Appartments</h1>

    </div>
  )
}

export default Menubar