"use client";

import Link from "next/link";
import { ProductType } from "../../type";
import Image from "next/image";
import { Heart } from "lucide-react";
import FormatedPrice from "./FormatedPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite } from "@/redux/proSlice";
import toaster, {Toaster, toast} from 'react-hot-toast';
import {StateProps} from '../../type';

interface Item {
  products: ProductType[];
}

const Product = ({ products }: Item) => {;

  const dispatch = useDispatch();
  const {favoriteData} = useSelector((state:StateProps)=>state.pro);

  const isFavourite = (productId: any) => {
    return favoriteData.some((favoriteItem)=>favoriteItem._id===productId);
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10'>
            {
                products.map((item,idx)=>{
                    return(
                        <div key={idx} className='relative bg-white group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden'> 
                            <Link href={{pathname:`/${item?._id}`,query:{_id:item?._id}}}>
                                <Image src={item?.image} alt='image' width={500} height={500} className='w-full h-80 object-contain lg:object-cover group-hover:scale-105 duration-300'/>
                            </Link>
                            <Heart onClick={()=>{dispatch(addToFavorite(item));
                            if(isFavourite(item?._id)){
                                toast.error(`${item.title} is removed from Favourite`);
                            }
                            else{
                                toast.success(`${item.title} is added from Favourite`)
                            }}} fill={isFavourite(item._id)?'red':'black'} className='absolute top-4 right-4 text-zinc-500 w-5 h-5 hover:text-designColor cursor-pointer duration-200'/>
                            <div className="p-4 bg-zinc-100 group-hover:shadow-xl duration-300">
                                <p className='group-hover:text-designColor duration-300 font-semibold capitalize'>{item?.title}</p>
                                <p className='font-semibold'>
                                <FormatedPrice price={item?.price}/>

                                </p>
                                <div className="flex items-center justify-between text-sm mt-2">
                                    <button className='uppercase font-semibold hover:text-designColor duration-300' onClick={()=>{dispatch(addToCart(item)),toast.success(`${item.title} is Added to Cart`)}}>
                                        Add to Cart
                                    </button>
                                    <Link href={{pathname:`/${item?._id}`,query:{_id:item?._id}}}className='uppercase font-semibold hover:text-designColor duration-300'>More Info</Link>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
            <Toaster position="bottom-right" toastOptions={{
                style:{
                    background: '#000',
                    color: 'white'
                }
            }}/>
        </div>
  );
};

export default Product;