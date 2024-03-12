'use client'
import { useEffect, useState } from 'react'
import { URI } from '@/src/constants/Constants'
import Loading from '@/src/components/loading/Loading'
import { ProductsApi } from '@/src/API/products/products'
import ProductsCard from '@/src/components/card/products/ProductsCard'

const Products = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await ProductsApi.getProducts()            
            const filteredData = data.filter((item:any) => item.type === 'e')
            setProductData(filteredData)
        }
        getData()
    }, [])

    return (
        <div className='px-5 flex py-3 gap-x-10 flex-wrap justify-center'>
            {productData?.length > 0 ? productData.map((item: {id: string; image: string; title: string; description: string}) => {
                return (
                    <ProductsCard key={item['title']} title={item['title']}  id={item['id']} description={item['description']} src={`${URI}${item.image}`}/>
                )
            }) : <Loading/>}
        </div>
    )
}

export default Products