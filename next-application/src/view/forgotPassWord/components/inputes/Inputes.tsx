import { Dispatch, SetStateAction } from 'react'
import Input from "@/src/components/input/Input";

type FormState = {
    email: string;
    password: string;
    code:string
  };

interface IInputes {
    code:boolean
    inputData:FormState,
    setInputData:Dispatch<SetStateAction<FormState>>
}

const Inputes = (props:IInputes) => {
    const {code, inputData, setInputData} = props
return (
    <div className='flex flex-wrap gap-2 justify-center'>
    <label htmlFor={code ? 'code' : 'email'} className='w-full max-w-80'>{code ? 'Code' : 'Email'}</label>
  {!code && <Input
        id='email'
        value={inputData.email}
        onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
        className='border-2 h-10 w-80 border-none bottom-0.5 border-slate-300'
        style={{ borderBottom: '2px solid #d9d9d9', outline: 'none' }}
        placeholder={'Email'}
        type={'email'}
    />}
   { code && <><Input
        id={'code'}
        value={inputData.code}
        onChange={(e) => setInputData({ ...inputData, code: e.target.value })}
        className='border-2 h-10 w-80 border-none bottom-0.5 border-slate-300'
        style={{ borderBottom: '2px solid #d9d9d9', outline: 'none' }}
        placeholder={'Code'}
        type={'number'}
    />
    <Input
        id={'password'}
        value={inputData.password}
        onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
        className='border-2 h-10 w-80 border-none bottom-0.5 border-slate-300'
        style={{ borderBottom: '2px solid #d9d9d9', outline: 'none' }}
        placeholder={'Password'}
        type={'password'}
    />
    </>
    }
</div>
)
}

export default Inputes