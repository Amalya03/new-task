const CategoriesImage = () => {
    return (
        <div className='flex w-full gap-3 max-w-screen-xl flex-wrap justify-center'>
            {['jpg', 'webp', 'avif', 'avif'].map((item, index) => {
                return (
                    <img key={index} className='max-w-72' src={`/assets/categories/image${index + 1}.${item}`} alt='' />
                )
            })}
        </div>
    )
}

export default CategoriesImage