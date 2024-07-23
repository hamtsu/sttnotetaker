const TextInput = ({ onChangeEx, invalid, setInvalid }) => {
    const onChange= (e) => {
        setInvalid(false)
        onChangeEx(e)
    }

    return (
        <input maxLength={25} type="text" autoFocus placeholder="enter document name..." className={` ${invalid && "border-red-400 ring-0"} text-2xl p-3 font-bold bg-neutral-800 border border-neutral-600 rounded-md w-full`} onChange={onChange}/>
    )
}

export default TextInput