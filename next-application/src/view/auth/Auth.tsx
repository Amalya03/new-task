"use client"
import Inputes from './components/inputes/Inputes';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { UserApi } from '@/src/API/user/user'
import Button from '@/src/components/button/Button'
import Title from '@/src/components/modal/components/title/title'

interface IModalInfo {
    onClick: () => void
}

type FormState = {
    email: string;
    password: string;
    confirmPassword: string;
};

const ModalInfo = (props: IModalInfo) => {
    const router = useRouter()
    const { onClick } = props
    const [signUp, setSignUp] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [userInfo, setUserInfo] = useState<FormState>({ email: '', password: '', confirmPassword: '' })
    const [errorMessage, setErrorMessage] = useState<FormState>({ email: '', password: '', confirmPassword: '' })

    const auth = async () => {
        let data;
        if (signUp) { data = await UserApi.registration(userInfo.email, userInfo.password) }
        else data = await UserApi.login(userInfo.email, userInfo.password)
        if (data.token && !signUp) {
            router.push('/user-account')
            // window.location.reload();
            window.location.pathname = 'user-account'
            localStorage.setItem('token', data.token);
        } else if (data.token && signUp) {
            router.push('/')
            window.location.reload()
        } else {
            alert(data.message)
        }
    }

    const userSignUp = () => {
        setSignUp(!signUp)
        setUserInfo({ email: '', password: '', confirmPassword: '' })
    }

    useEffect(() => {
        if ((userInfo.email.length > 0 && userInfo.password.length > 0 && !signUp) || (userInfo.email.length > 0 && userInfo.password.length > 0 && userInfo.confirmPassword.length > 0 && signUp)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [userInfo, signUp])

    const onChange = (e: any) => {
        if ((!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(userInfo.email) && e.target.value.length > 0)) {
            setErrorMessage({ ...errorMessage, email: "Email does not exist or was misspelled." })
        } else {
            setErrorMessage({ ...errorMessage, email: '' })
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4'>
            <Title text={signUp ? 'Sign Up' : 'Sign In'} className='text-2xl w-full text-center' />
            <Inputes userInfo={userInfo} signUp={signUp} setUserInfo={setUserInfo} errorMessage={errorMessage} onChange={(e: any) => onChange(e)} />
            <Button disabled={disabled} className='w-80 bg-slate-500 h-10 text-white rounded disabled:opacity-25' onClick={auth}> {signUp ? 'Sign Up' : 'Sign In'} </Button>
            <Button onClick={onClick}><Title text='Forgote password?' className='' /> </Button>
            <div className='w-full hover:cursor-pointer' style={{ borderBottom: '2px solid #d9d9d9' }} />
            <div><Title text='Not a member yet? ' className='' />
                <Button className='text-slate-500' onClick={userSignUp}> {!signUp ? 'Sign Up.' : 'Sign In'}</Button>
            </div>
        </div>
    )
}

export default ModalInfo