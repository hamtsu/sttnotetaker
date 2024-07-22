const Button = ({ children, onClick, className }) => {
    return (
        <button onClick={onClick} className={`${className} bg-neutral-600 p-3 w-fit px-4 rounded-md border border-neutral-600 hover:bg-neutral-700 active:bg-neutral-800`}>
            {children}
        </button>
    )
}

export default Button