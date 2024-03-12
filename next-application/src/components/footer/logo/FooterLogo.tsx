import Image from 'next/image'
import Link from 'next/link'

const FooterLogo = () => {
    return (
        <div className='mb-6 md:mb-0 flex'>
            <Link href='/' className='flex items-center'>
                <Image src='/assets/logo/logo.png' className='h-32 me-3' alt='FlowBite Logo' priority
                    width={170}
                    height={25} />
            </Link>
        </div>
    )
}

export default FooterLogo