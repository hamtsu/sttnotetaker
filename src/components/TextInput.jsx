import { forwardRef } from 'react';

const TextInput = forwardRef(({ onChangeEx, invalid, setInvalid }, ref) => {
    const onChange = (e) => {
        setInvalid(false);
        onChangeEx(e);
    };

    return (
        <input
            maxLength={25}
            ref={ref}
            type="text"
            autoFocus
            placeholder="enter document name..."
            className={`${invalid ? "border-red-400 outline-none" : ""} text-neutral-100 text-2xl p-3 font-bold bg-neutral-800 border border-neutral-600 rounded-md w-full`}
            onChange={onChange}
        />
    );
});

TextInput.displayName = "TextInput"

export default TextInput;
