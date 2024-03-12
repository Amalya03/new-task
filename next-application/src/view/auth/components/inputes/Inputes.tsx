import { useState } from "react"
import { Dispatch, SetStateAction } from 'react'
import Input from "@/src/components/input/Input"

type FormState = {
    email: string;
    password: string;
    confirmPassword: string;
};

interface IInputes {
    userInfo: FormState,
    signUp: boolean
    setUserInfo: Dispatch<SetStateAction<FormState>>,
    errorMessage:FormState | undefined,
    onChange: (e:object) => void
}

const Inputes = (props: IInputes) => {
    const { signUp, userInfo, setUserInfo, errorMessage, onChange} = props
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)

    return (
        <div className='flex flex-wrap justify-center gap-y-5'>
            <Input
                value={userInfo['email']}
                onChange={(e) => (setUserInfo({ ...userInfo, email: e.target.value }), onChange(e))}
                className='border-2 h-10 w-80 border-none bottom-0.5 border-slate-300'
                style={{ borderBottom: '2px solid #d9d9d9', outline: 'none' }}
                placeholder='Email'
                type='email'
                id='email'
            />
            <Input
                onClick={() => setShowPassword(!showPassword)}
                id='password'
                type={showPassword ? 'text' : 'password'}
                value={userInfo['password']}
                onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }), onChange(e)}} contanierClass='relative'
                labelClass='absolute right-1 h-10'
                className='border-2 h-10 w-80 border-none bottom-0.5 border-slate-300'
                style={{ borderBottom: '2px solid #d9d9d9', outline: 'none' }}
                placeholder='Password' src={`/assets/password/${showPassword ? 'unShow' : 'show'}.svg`}
            />
            {signUp ?<Input
                id='confirmPassword'
                onClick={() => setConfirmPassword(!confirmPassword)}
                type={confirmPassword ? 'text' : 'password'}
                value={userInfo['confirmPassword']}
                onChange={(e) => (setUserInfo({ ...userInfo, confirmPassword: e.target.value }), onChange(e))} contanierClass='relative'
                labelClass='absolute right-1 h-10'
                className='border-2 h-10 w-80 border-none bottom-0.5 border-slate-300'
                style={{ borderBottom: '2px solid #d9d9d9', outline: 'none' }}
                placeholder='Confirm password' src={`/assets/password/${confirmPassword ? 'unShow' : 'show'}.svg`}
            />
            : <></>
            }
        </div>
    )
}

export default Inputes