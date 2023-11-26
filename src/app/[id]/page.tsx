import { getProducts } from '@/helpers';
import React from 'react';
import { ProductType } from '../../../type';
import Container from '@/components/Container';
import Image from 'next/image';
import FormatedPrice from '@/components/FormatedPrice';
type Props = {
    searchParams: {[key:string]:string|string[]|undefined}
}
const page = async ({searchParams}:Props) => {
    const products = await getProducts();
    console.log(searchParams);
    const _idString = searchParams?._id
    const _id = Number(_idString);

    const singleProduct = (_id:number) => {
        const item = products.find((product:ProductType)=>product._id===_id);
        return item;
    }

    const targetProduct = singleProduct(_id);
    console.log(targetProduct); 
    return (
        <Container className='flex items-center flex-col md:flex-row px-4 xl:px-0'>
            <div className="w-full md:w-1/2 overflow-hidden bg-zinc-100 flex justify-center items-center p-10">
                <Image src={targetProduct?.image} alt='image' width={500} height={500} className='transform transition-transform hover:scale-110 duration-300'/>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2">
                <h2 className='capitalize text-3xl font-semibold'>{targetProduct?.title}</h2>
                <p className='flex items-center gap-10'>
                    <FormatedPrice price={targetProduct?.price} className='text-lg font-semibold'/>
                    <FormatedPrice price={targetProduct?.previousPrice} className='text-zinc-500 line-through'/>
                </p>
                <p>You Saved {" "}<FormatedPrice price={targetProduct?.price-targetProduct?.previousPrice} className='text-base bg-designColor font-semibold underline underline-offset-2'/>{" "}from this product.</p>
                <button className='bg-designColor/80 text-zinc-700 px-6 py-2 font-medium rounded-md hover:bg-designColor cursor-pointer duration-200 hover:shadow-lg w-40 my-2'>Add to Cart</button>
                {
                    targetProduct?.isNew && <p className='font-semibold text-designColor'>New Arrival</p>
                }
                <p>
                    Brand: <span className='font-semibold'>{targetProduct?.brand}</span>
                </p>
                <p>
                    Category: <span className='font-semibold'>{targetProduct?.category}</span>
                </p>
                <p>
                    {targetProduct?.description}
                </p>
            </div>

        </Container>
    );
};

export default page;