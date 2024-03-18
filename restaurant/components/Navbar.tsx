import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
    const user =false
  return (
    <div className='h-12 text-blue 500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:24 lg:px-20 xl:px-20'>
        {/*LEFT LINKS*/}
        <div className='hidden md:flex gap-4 flex-1'>
            <Link href="/">HomePage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
            <Link href="/aboutUs">About Us</Link>
        </div>
         {/* LOGO*/}
        <div className='text-xl md:font-bold md:text-center'>
            <Link href="#">HUNGRY HUB</Link>
            </div>
            {/* mobile menu*/}
        <div className='md:hidden'>
            <Menu />
        </div>
        {/*RIGHT LINKS*/}
        <div className='hidden md:flex gap-4 items-center justify-end flex-1'></div>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-700 px-1 rounded-md'>
            <Image src="/phone.png" alt="" width={20} height={20}/>
            <span>+254 7123345</span>
        </div>
        {!user ? (
        <Link href="/login">Login</Link>
        ) : (
        <Link href="/orders">Order</Link>
        )}
        <CartIcon/>
    </div>
  )
}

export default Navbar
