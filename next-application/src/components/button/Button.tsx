interface ButtonProps {
    className?: string,
    children?: any
    onClick?: () => void
    disabled?:boolean
}

const Button = (props: ButtonProps) => {
    const { children, className, onClick,disabled,...anyProps } = props
    return (
        <button onClick={onClick} className={className} disabled={disabled }{...anyProps}>{children}</button>
    )
}

export default Button