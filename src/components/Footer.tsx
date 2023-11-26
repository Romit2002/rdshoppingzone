import React from 'react';
import Container from './Container';
import Logo from './Logo';
import { navigation } from '@/app/constants/data';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#180735] mt-10 py-10 text-zinc-300 '>
            <Container className='flex items-center justify-between'>
                <Logo className='text-white' spanClassName='bg-white text-black'/>
                <ul className='flex gap-6 items-center justify-center'>
                    {
                        navigation.map((item)=>{
                            return(
                                <Link key={item?.id} href={item?.href}>
                                    <li className='hover:text-designColor'>
                                        {item?.title}    
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
                <p>Join Me with romitdas2019@gmail.com</p>
            </Container>
        </div>
    );
};

export default Footer;