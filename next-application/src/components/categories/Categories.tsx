import CategoriesImage from './image/CategoriesImage'

const Categories = () => {
    return (
        <div className='w-full py-3 text-[#f6f9fb]' style={{ backgroundColor: '#f6f9fb' }}>
            <div className='flex justify-center w-full px-5 flex-wrap gap-5'>
                <div className='max-w-screen-xl'> <img src='/assets/categories/img.png' alt='' />
                </div>
                <div className='flex w-full gap-3 max-w-screen-xl justify-center'>
                    <CategoriesImage />
                </div>
            </div>
        </div>
    )
}

export default Categories