import { Recent } from './Recent'

import { productList } from '../utils/data';

export const Recents = () => {
    return (
        <div className=''>
            {productList.map(recentItem => (
                <Recent
                    key={recentItem.SKU}
                    item={recentItem}
                />
            ))}
        </div>
    )
}
