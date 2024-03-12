'use client'
import Links from './links/Links'
import Modal from '../modal/Modal'
import Button from '../button/Button'
import NavBarLogo from './logo/NavBarLogo'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ModalInfo from '@/src/view/modalInfo/ModalInfo'

const NavBar = () => {
  let token: any
  const [show, setShow] = useState(false)
  const [isAuth, setIsAuth] = useState<boolean>()
  const router = useRouter()

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token')
  }

  useEffect(() => {
    if (token) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, [token])

  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }
  )

  const showModal = () => {
    if (token) {
      setIsAuth(false)
      router.push('/')
      localStorage.removeItem('token')
    } else {
      setShow(!show)
    }
  }

  return (
    <>
      <nav className='flex px-3 py-3 items-center bg-slate-500 w-full h-24 justify-between'>
        <NavBarLogo />
        <Links />
        <Button onClick={showModal} className='bg-slate-400 text-white h-[40px] text-center px-3 rounded'>
          {isAuth ? "Log out" : "Sign in"}
        </Button>
      </nav>
      {show ? <Modal setShow={setShow}> <ModalInfo setShow={setShow} /> </Modal> : <></>}
    </>

  )
}

export default NavBar