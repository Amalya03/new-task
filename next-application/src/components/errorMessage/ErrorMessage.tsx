interface IErrorMessage {
    errorMessage:string
}

const ErrorMessage = (props: IErrorMessage) => {
    const {errorMessage} = props
    return (
        <div className="w-full max-w-[320px]">
            <span className="text-rose-700 text-left text-xs font-semibold">{errorMessage}</span>
        </div>
    )
}

export default ErrorMessage