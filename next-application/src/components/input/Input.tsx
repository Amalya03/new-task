import Image from 'next/image'
import { InputHTMLAttributes } from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    src?: string,
    labelClass?: string,
    contanierClass?: string,
    htmlFor?: string,
    onClick?: () => void,
    errorMessage?:string
}

const Input: React.FC<IInput> = (props: IInput) => {
    const { className = '', contanierClass, value, labelClass, id, type, src, errorMessage,  onChange, onClick, ...anyProps } = props
    return (
        <div>
            <div className={contanierClass}>
                <input
                    id={id}
                    required
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={'' + className}
                    {...anyProps}
                />
                {src && <label htmlFor={id} className={labelClass}>
                    <button onClick={onClick}><Image src={src} width={20} height={20} priority alt='' className='pt-2' /></button>
                </label>}
            </div>
           {/* {errorMessage && errorMessage.length > 0 ? <ErrorMessage errorMessage={errorMessage} /> : ''} */}
        </div>
    )
}

export default Input