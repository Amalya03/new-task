import { useEffect, useState } from 'react'
import { UserApi } from '@/src/API/user/user'
import { Dispatch, SetStateAction } from 'react'
import Button from '@/src/components/button/Button'
import Inputes from './components/inputes/Inputes'
import Title from '@/src/components/modal/components/title/title'

interface IForgotPasswordProps {
    setShow: Dispatch<SetStateAction<boolean>>
}

const ForgotePassword = (props: IForgotPasswordProps) => {
    const { setShow } = props
    const [code, setCode] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [inputData, setInputData] = useState({ email: '', password: '', code: '' })

    const sendData = async () => {
        let data;
        if (!code) {
            data = await UserApi.sendEmail(inputData.email)
            if (data.message === 'код отправлен') setCode(true)
        } else {
            data = await UserApi.sendCode(inputData.email, inputData.password, +inputData.code)
            if (data.message === 'пароль успешно изменён') setShow(false)
        }
    }

    useEffect(() => {
        if ((!code && inputData.email.length > 0) || (code && inputData.password.length > 0 && inputData.code.length > 0)) {
            setDisabled(false)
        } else setDisabled(true)
    }, [code, inputData])

    return (
        <div className='flex justify-center flex-wrap gap-6'>
            <Title text={'Forgot Password'} className='text-2xl w-full text-center' />
            <Inputes code={code} inputData={inputData} setInputData={setInputData} />
            <Button disabled={disabled} className='w-80 bg-slate-500 h-10 text-white rounded disabled:opacity-25' onClick={sendData}>
                Submit
            </Button>
        </div>
    )
}

export default ForgotePassword