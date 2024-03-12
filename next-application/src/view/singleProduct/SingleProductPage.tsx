'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { URI } from '@/src/constants/Constants'
import Title from '@/src/components/titles/Title'
import Loading from '@/src/components/loading/Loading'
import { ProductsApi } from '@/src/API/products/products'
import Text from '../../../src/components/card/products/components/text/Text';

interface ISingleProductPageProps {
    params: any
}

export default function SingleProductPage(props: ISingleProductPageProps) {
    const {params} = props
    const [productData, setProductData] = useState()

    useEffect(() => {
        const getProductData = async () => {
            const data = await ProductsApi.getSingleProduct(params.productId)
            setProductData(data)
        }
        getProductData()
    }, [params])

    if (!productData) {
        return <div className='flex h-screen justify-center items-center'><Loading/></div>
    }

    return (
        <div className='flex justify-center w-full'>
        <div className='flex p-10 h-screen flex-wrap justify-center max-w-screen-md	'>
            <div className='flex w-full'>
                <div className='max-h-80 w-96'>
                    <Image className='w-full h-80' src={`${URI}${productData['image']}`} alt='' width={1000} height={100} />
                </div>
                <Title title={productData['title']} />
            </div>
            <Text text={productData['description']} className={'text-xs'} />
        </div>
        </div>
    )
}