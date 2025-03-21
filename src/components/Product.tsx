import React from 'react'
import { Producto } from '../interfaces/Product'
import { RiMoneyDollarCircleLine } from "react-icons/ri";


interface Props {
    item: Producto
}
export const Product = (props: Props) => {
    return (
        <div className='w-60 h-72 my-0 mx-auto text-slate-500 break-inside-avoid-column py-2 px-2 justify-center items-center'>
            <div className='flex justify-center items-center'>
                <img src={props.item.Imagen ? props.item.Imagen : "https://placehold.co/200x200/000000/FFFFFF/png"} width={200} height={200} className='rounded-md' alt={props.item.Nombre} />
            </div>
            <div className='text-sm'>{props.item.Nombre}</div>
            <div className='flex flex-row justify-end items-center px-3'>
                <RiMoneyDollarCircleLine />
                <div className='pl-1'>{props.item.Precio}</div>
            </div>
        </div>
    )
}
