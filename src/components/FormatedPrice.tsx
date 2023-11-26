import { cn } from '@/lib/utils';
import React from 'react';
type Props = {
    price: number,
    className?:string
}

const FormatedPrice = ({price,className}:Props) => {
    const formattedAmount = new Number(price*80).toLocaleString('en-US',{
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits:0
    })
    return (
        <span className={cn("text-base text-black",className)}>{formattedAmount}/-</span>
    );
};

export default FormatedPrice;