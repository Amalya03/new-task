import Link from 'next/link'
import { data } from '../../../data/footer/FooterParameters'

const Info = () => {
    return (
        <div className='w-3/4 flex gap-x-10 justify-evenly'>
            {data.titles.map((title, index) => {
                return (
                    <div key={title}><span className='text-white font-medium text-xl flex flex-wrap'>{title}</span>
                        <div className='flex flex-wrap'>
                            {data.data[index].map((item, index1) => {
                                return <Link key={item} className='text-white w-full no-underline hover:opacity-25 !important' href={`${data.links[index][index1]}`}>{item}</Link>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Info