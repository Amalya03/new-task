import { useState } from 'react'
import Auth from '../auth/Auth'
import { Dispatch, SetStateAction } from 'react'
import ForgotePassword from '../forgotPassWord/ForgotPassword'

interface IModalInfoProps {
    setShow: Dispatch<SetStateAction<boolean>>
}

const ModalInfo = (props: IModalInfoProps) => {
    const { setShow } = props
    const [forgotPassword, setForgotPassword] = useState(false)

    return (
        <>
            {!forgotPassword ? <Auth onClick={() => setForgotPassword(true)} /> : <ForgotePassword setShow={setShow} />}
        </>
    )
}

export default ModalInfo