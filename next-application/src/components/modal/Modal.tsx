import { Dispatch, SetStateAction } from 'react'

interface ModalProps {
    children: any
    className?:string
    setShow: Dispatch<SetStateAction<boolean>>
}

const Modal = (props: ModalProps) => {
    const { setShow, children, className} = props

    const hideModal = () => {
        setShow(false)
    }

    return (
        <>
            <div onClick={hideModal} className={`flex justify-center w-full h-full absolute top-0 left-0`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div onClick={e => e.stopPropagation()} className={`absolute h-auto w-full max-w-md flex justify-center rounded-md p-4 ${className}`} style={{ backgroundColor: 'white', top: '35%', opacity: '10' }}>
                    {children}
                </div >
            </div>

        </>
    )
}

export default Modal