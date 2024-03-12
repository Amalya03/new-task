import SingleProductPage from '@/src/view/singleProduct/SingleProductPage'

export default function SingleProduct({ params }: { params: { productId: string } }) {
    return (
        <SingleProductPage params={params}/>
    )
}