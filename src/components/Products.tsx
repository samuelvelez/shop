import React from 'react'
import { Product } from './Product'
import { productList } from '../utils/data';
import FetchCSVData from '../utils/fetchCSVData';
import { Producto } from '../interfaces/Product';

export const Products = () => {

    const fetchCSVData: Producto[] = FetchCSVData();

    console.log(fetchCSVData)
    return (
        <div className='columns-1 justify-center items-center sm:columns-2 lg:columns-3'>
            {fetchCSVData.map(product => (
                <Product
                    key={product.SKU}
                    item={product}
                />
            ))}
        </div>
    )
}
