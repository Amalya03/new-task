interface TitlesProps {
    title?: string,
    subTitle?: string,
    className?:string
}

const Title = (props: TitlesProps) => {
    const { title, subTitle, className} = props

    return (
        <div className='w-full justify-center flex text-center py-3 flex-wrap'>
            <span className={`w-full justify-center text-3xl font-semibold ${className}`}>{title}</span>
            {subTitle && <span className='font-medium text-xl' style={{ color: '#64748B' }}>{subTitle}</span>}
        </div>
    )
}

export default Title