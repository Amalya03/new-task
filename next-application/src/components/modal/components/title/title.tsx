interface TitlesProps {
    text: string
    className:string
}

const Title = (props:TitlesProps) => {
    const {text} = props
    return (
        <span>{text}</span>
    )
}

export default Title