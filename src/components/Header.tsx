'use client';
import React from 'react'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
const Header = () => {
    const pathname = usePathname()
  return (
    <>
    {pathname === '/' && <Navbar className="top-5 left-3 right-3" />}
    </>
  )
}

export default Header