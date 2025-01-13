"use client"

    import React from 'react'
import { IoMenu,IoClose } from "react-icons/io5";
import {useState} from "react";
import Link from 'next/link';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
    <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'></div>
      <ul className='gap-10 lg:gap-16 hidden md:flex'>
      <li className='menuLink'><Link href="/">Home</Link></li>
        <li className='menuLink'><Link href="/allproduct">All Products</Link></li>
        <li className='menuLink'><Link href="/productdetail">Product Detail</Link></li>
        <li className='menuLink'><Link href="/login">Login</Link></li>
        <li className='menuLink'><Link href="/joinus">Join Us</Link></li>
        <li className='menuLink'><Link href="/cart">Cart</Link></li>
        <li className='menuLink'><Link href="/contactus">Contact Us</Link></li> 
        <li className='menuLink'><Link href="/checkout">Checkout</Link></li>
        
        
      </ul>
      <div className='md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <IoClose size={30}/> :
        <IoMenu size={30} />
        }
      </div>
       {/* <IoMenu className='md:hidden' size={30}/> */}
    </div>
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
      </ul>
    )

    }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><Link href="/allproduct" onClick={toggleMenu}>All Product</Link></li>
      </ul>
    )

    }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><Link href="/productdetail" onClick={toggleMenu}>Product Detail</Link></li>
      </ul>
    )

    }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><Link href="/login" onClick={toggleMenu}>Login</Link></li>
      </ul>
    )
  }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
      <li><Link href="/joinus" onClick={toggleMenu}>Join Us</Link></li>
      </ul>
    )
    }
    
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><Link href="/cart" onClick={toggleMenu}>Cart</Link></li>
      </ul>
    )
    }
     {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
      <li><Link href="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    )
    } 
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
      <li><Link href="/checkout" onClick={toggleMenu}>Checkout</Link></li>
      </ul>
    )
    }
    </div>
    
  )
}
    export default Navbar