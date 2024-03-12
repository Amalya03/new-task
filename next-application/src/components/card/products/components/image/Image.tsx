import Image from 'next/image'

interface IImageProps {
    src?:string
}

const ProductCardImage = (props:IImageProps) => {
    const {src} = props
    
    return (
        <div className='w-full'>
            <Image src={src ?? '/assets/electronics.avif'} alt='' width={300} height={300} priority style={{height:'300px'}} className='w-[300px]'/>
        </div>
    )
}

export default ProductCardImage