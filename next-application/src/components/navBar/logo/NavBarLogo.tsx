import Image from 'next/image'
import Link from 'next/link'

const NavBarLogo = () => {
  return (
    <Link className='navbar-brand px-3 py-3 max-w-32' href='/'>
      <Image src='/assets/logo/logo.png' alt='' width={96} height={75} priority />
    </Link>
  )
}

export default NavBarLogo