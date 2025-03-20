
import { Product } from './Product'
import FetchCSVData from '../utils/fetchCSVData';
import { Producto } from '../interfaces/Product';

interface Props {
    url: string
}
export const Products = ({ url }: Props) => {
    const fetchCSVData: Producto[] = FetchCSVData(url);
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
