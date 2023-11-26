import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props{
    className?:string;
    spanClassName?:string;
}

const Logo = ({ className, spanClassName }: Props) => {
    return (
        <Link href='/' className={cn('text-zinc-950 text-xl group',className)}><span className={cn('bg-red-700 text-white w-8 h-8 rounded-full text-2xl font-bold mr-1 group-hover:bg-yellow-400 duration-200',spanClassName)}>RD</span>Zone</Link>
    );
};

export default Logo;