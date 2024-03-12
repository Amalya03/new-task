'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { UserApi } from '@/src/API/user/user'
import UserInfo from './components/info/UserInfo';
import Loading from '@/src/components/loading/Loading';
import TextArea from '@/src/components/textArea/TextArea';
import UserAccountTitle from './components/title/UserAccountTitle';
import { useRouter } from 'next/navigation';

const Profile = () => {
    let token: any;
    const router = useRouter()
    const [userData, setUserData] = useState([])

    if (typeof window !== 'undefined') {
        token = localStorage.getItem('token')
    }

    useEffect(() => {
        if (token) {
            const getUserData = async () => {
                const data = await UserApi.user()
                setUserData(data)
            }
            getUserData()
        }
    }, [token])

    useEffect(() => {
        if (!token) {
            router.push('/')
        }
    }, [token, router])

    return (
        <div className='flex w-full justify-center p-10 items-center h-[100vh]'>
            {token && <div className='flex flex-wrap max-w-2xl justify-start w-full gap-8'>
                <UserAccountTitle />
                <div className='flex gap-5'>
                    <Image src={'/assets/user/user.svg'} alt='' width={200} height={100} className='justify-center' />
                    <div className='w-[450px]'>
                        <TextArea className='h-[200px] w-[450px] p-4' placeholder='Description about user' />
                    </div>
                </div>
                <UserInfo data={userData} />
            </div>}
            {!token && <Loading />}
        </div>

    )
}

export default Profile