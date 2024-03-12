import Info from './info/Info'
import FooterLogo from './logo/FooterLogo'

const Footer = () => {
    return (
        <footer className='dark:bg-gray-900 bg-slate-500 w-full flex gap-x-10'>
            <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-slate-500'>
                <div className='md:flex md:justify-between'>
                    <FooterLogo />
                    <Info />
                </div>
            </div>
        </footer>
    )
}

export default Footer