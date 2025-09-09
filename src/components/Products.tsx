
import { Product } from './Product'
import FetchCSVData from '../utils/fetchCSVData';
import { Producto } from '../interfaces/Product';

interface Props {
    url: string,
    category?: string
}
export const Products = ({ url, category }: Props) => {
    const fetchCSVData: Producto[] = FetchCSVData(url);
    // console.log(fetchCSVData, category)
    //  console.log(fetchCSVData[0].Categoria)
    if (category && category !== '') {
        // Filtrar los productos por la categoría seleccionada
        const filteredProducts = fetchCSVData.filter(product => product.Categoria === category)
        console.log(filteredProducts)
        return (
            <div className='columns-1 justify-center items-center sm:columns-2 lg:columns-3'>
                {filteredProducts.map(product => (
                    <Product
                        key={product.SKU}
                        item={product}
                    />
                ))}
            </div>
        )
    }
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
