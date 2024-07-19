const Button = ({ children }) => {
    return (
        <button className="bg-neutral-600 p-3 rounded-md border border-neutral-600 hover:bg-neutral-700 active:bg-neutral-800 ">
            {children}
        </button>
    )
}

export default Button