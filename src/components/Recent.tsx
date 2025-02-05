import { Producto } from '../interfaces/Product'

interface Props {
    item: Producto
}

export const Recent = (props: Props) => {
    return (
        <div className='w-full my-0 mx-auto text-slate-500 break-inside-avoid-column py-2 px-2 justify-center items-center flex flex-row'>
            <div className='flex justify-center items-center'>
                <img src={props.item.Imagen} className='rounded-md object-fill h-24 w-24' />
            </div>
            <div className='px-1 '>
                <div className='text-sm'>{props.item.Nombre}</div>
                {/* <div className='flex flex-row justify-start items-center px-3'>
                    {/* <RiMoneyDollarCircleLine /> *
                <div className='pl-1'>{props.item.Precio}</div>
            </div> */}
            </div>
        </div >
    )
}
