interface TextProps {
text:string,
className?:string,
textStyle?:string
}
const Text = (props: TextProps) => {
    const {text, className, textStyle} = props
    return (
        <div className={'w-full' + className}><span className={textStyle}>{text}</span>
        </div>
    )
}

export default Text