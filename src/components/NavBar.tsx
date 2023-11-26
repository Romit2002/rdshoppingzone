"use client"
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {ShoppingCart, ShoppingBag} from 'lucide-react'
import {signIn, useSession} from 'next-auth/react';
import {StateProps} from '../../type';
import {useSelector} from 'react-redux'

const NavBar = ({className,spanClassName}:any) => {
    const pathName = usePathname();
    console.log(pathName);
    const {data:session} = useSession();
    // console.log(session);

    const {productData,favoriteData} = useSelector((state:StateProps)=>state.pro);
    // console.log(productData)
    const navigation = [
        {
            id:910,title:"Home",href:"/"
        },
        {
            id:911,title:"Phones",href:"/phones"
        },
        {
            id:912,title:"Phone Cases",href:"/phonecases"
        },
        {
            id:913,title:"Watches",href:"/watches"
        },
        {
            id:914,title:"Accessiories",href:"/accessiories"
        },
    ]
    return (
        <div className='w-full h-20 border-b-[1px] border-b-zinc-500 bg-white/80 text-zinc-600 sticky top-0 z-50 backdrop-blur-2xl'>
            <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:0">
                {/* Logo */}
                <Logo />
                {/* Navigation Panel Menu */}
                <ul className='hidden md:flex items-center gap-5 text-sm uppercase font-semibold'>
                    {
                        navigation.map((item)=>{
                            return(
                                <Link key={item?.id} href={item?.href}><li className={`cursor-pointer hover:text-designColor relative duration-200 overflow-hidden group ${item.href===pathName && "text-designColor"}`}>{item?.title}
                                <span className={`absolute h-[1px] w-full bg-designColor left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ${item.href===pathName && "translate-x-0 bg-designColor"}`}></span>
                                    </li></Link>
                            )
                        })
                    }

                </ul>
                {/* icon */}
                <div className='flex items-center gap-x-5'>
                    <Link href={"/wishlist"} className='hover:text-black cursor-pointer duration-200 relative group'>
                        <ShoppingBag className='w-7 h-7'/>
                        <span className='absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-designColor font-semibold group-hover:text-white'>{favoriteData?favoriteData.length:0}</span>
                    </Link>
                    <Link href={"/cart"} className='hover:text-black cursor-pointer duration-200 relative group'>
                        <ShoppingCart className='w-7 h-7'/>
                        <span className='absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-designColor font-semibold group-hover:text-white'>{productData?productData.length:0}</span>
                    </Link>
                    {
                        session?(<Link href={'/profile'} className=' cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold hover:text-designColor'>Profile
                        <span className='absolute h-[1px] w-full bg-designColor left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500'></span>
                        </Link>):
                        (
                            <button onClick={()=>signIn()} className=' cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold hover:text-designColor'>Login
                            <span className='absolute h-[1px] w-full bg-designColor left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500'></span>
                            </button>
                        )
                    }
                    
                    
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;

