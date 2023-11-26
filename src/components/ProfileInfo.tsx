'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const ProfileInfo = () => {
    const {data:session} = useSession();
    return (
        <div>
            <div className='flex items-center gap-4'>
                <Image src={session?.user?.image!} alt='userImage' width={500} height={500} className='w-20 h-20 object-cover rounded-full' />
                <div className="">
                    <h2>{session?.user?.name}</h2>
                    <h2>{session?.user?.email}</h2>
                </div>
            </div>
            <button onClick={()=>signOut()} className='bg-zinc-950 text-white/90 font-semibold mt-10 px-8 py-3 hover:bg-designColor hover:text-black duration-200 rounded-sm'>Log Out</button>
        </div>
    );
};

export default ProfileInfo;