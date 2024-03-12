import Button from '../../button/Button';
import Text from './components/text/Text';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import ProductCardImage from './components/image/Image';

interface ProductsCardProps {
    title: string,
    description: string,
    src?: string,
    id?: string
}

const ProductsCard = (props: ProductsCardProps) => {
    const router = useRouter()
    const { title, description, src, id } = props

    return (
        <div className='min-w-20 shadow-xl gap-y-2 flex flex-wrap max-w-[260px] px-2 py-2'>
            <ProductCardImage src={src} />
            {[title, description].map((item) => {
                return (
                    <Text key={item} text={item} className={item === description ? 'text-xs' : ''} />
                )
            })}
            <Button className='w-full justify-end flex px-3 text-slate-500' onClick={() => router.push(`/products/${id}`)}>More</Button>
        </div>
    )
}

export default ProductsCard