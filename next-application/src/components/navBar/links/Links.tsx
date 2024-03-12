import Link from 'next/link'
import { data } from '@/src/data/navBar/navBarParameters'

const Links = () => {
  return (
    <div className='flex gap-x-12'>
      {data.map((item) => {
        return <Link href={`/${item.link}`} key={`${item.name}`} className='no-underline text-white text-xl hover:opacity-25 !important'>{item.name}</Link>
      })}
    </div>
  )
}

export default Links