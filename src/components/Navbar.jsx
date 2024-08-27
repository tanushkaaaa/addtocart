import React from 'react';
import '../styles/navbar.css'

const Navbar = ({size,setShow}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop' onClick={()=> setShow(true)}>
                DxO Shop
            </span>
            <div className='cart' onClick={()=> setShow(false)}>
                <span>
                    <i className='square'></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar