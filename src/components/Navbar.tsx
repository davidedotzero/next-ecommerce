import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-2 lg:px-16 xl:32 2xl:px-64'>
            <div className="h-full flex item-center justify-between">
                {/* MOBILE SCREEN */}
                <Link href="/">
                    <div className="text-2xl tracking-wide">LAMA</div></Link>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar
