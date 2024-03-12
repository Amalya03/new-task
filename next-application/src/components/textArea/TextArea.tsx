
interface TextAreaProps {
    className?:string
    placeholder?:string
}

const TextArea = (props:TextAreaProps) => {
    const {className, placeholder} = props
    return (
        <textarea className={className} placeholder={placeholder}></textarea>
    )
}

export default TextArea