import React from 'react';
import Container from './Container';
import { ScanFace, Smartphone, Watch, PcCase} from 'lucide-react';
import Link from 'next/link';
import Product from './Product';
import { getProducts } from '@/helpers';

const Products = async () => {
    const products = await getProducts();
    return (
        <div className='mt-10 mb-60'>
            <Container>
                <div className="flex flex-col gap-2 items-center">
                    <h2 className='text-3xl font-semibold'>Choose a category</h2>
                    <p className='text-lg text-center'>

                        Explore a dozons of customized layout by our briliant designers
                    </p>
                    <div className="text-zinc-500 flex items-center gap-2 md:gap-6 mt-5">
                        <Link href={'/phones'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
                        <Smartphone />
                        <p>Phones</p>
                        </Link>
                        <div className="h-7 w-[1px] bg-designColor inline-flex" />

                        <Link href={'/watches'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
                        <Watch />
                        <p>Phones</p>
                        </Link>
                        <div className="h-7 w-[1px] bg-designColor inline-flex" />

                        <Link href={'/phones'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
                        <ScanFace />
                        <p>Acccessiries</p>
                        </Link>
                        <div className="h-7 w-[1px] bg-designColor inline-flex" />

                        <Link href={'/phonecase'} className='flex gap-2 hover:text-black cursor-pointer duration-200'>
                        <PcCase />
                        <p>Phones</p>
                        </Link>
                        
                    </div>
                </div>
                <Product products={products}/>
            </Container>
        </div>
    );
};

export default Products;