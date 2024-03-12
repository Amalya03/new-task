import Image from "next/image"
import { userData } from "@/src/data/userData/userData"

interface IUserInfo {
    data:any
}

const UserInfo = (props:IUserInfo) => {
    const {data} = props
    const keys = ['name', 'surname', 'email', 'phone']

    if(!data) return 
    
    return (
        <>
            {userData.map((item: { image: string, key: string, name: string }, index) => {
                return (
                    <div key={item['key']} className='flex flex-wrap max-w-2xl justify-start w-full bg-white h-[55px] shadow-lg items-center p-3 text-slate-500'>
                        <Image src={`assets/user/${item['image']}.svg`} width={40} height={40} alt='' className='pr-[10px]' />
                        {data[keys[index]] ?? item['name']}
                    </div>
                )
            })}
        </>
    )
}

export default UserInfo