import { useEffect, useState } from 'react'
import Button from '../Button';
import { FaCircle, FaCircleExclamation } from 'react-icons/fa6';
import { FaMicrophone } from 'react-icons/fa';

const SpeechModal = ({ handleClose, closable }) => {

    const [text, setText] = useState('')

    useEffect(() => {
        if (closable) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    handleClose?.()
                }
            })
        }

        return () => {
            closable && document.removeEventListener('keydown', () => { })
        }
    }, [])

    return (
        <div className='w-[700px] rounded-md border border-neutral-800 overflow-hidden'>
            <div className='flex'>
                <div className='bg-neutral-300 border px-3 p-2  flex items-center gap-1'>
                    <FaMicrophone className='text-neutral-500 text-2xl' />
                    <FaCircle className='text-orange-500 animate-pulse text-2xl' />
                    <p className='text-neutral-600 font-light text-lg pl-2'>Microphone paused ...</p>
                </div>

                <div className='flex flex-col gap-1 w-full p-1 py-4 px-3 text-center border-l-4 border-neutral-700'>
                    <p className={`${!text && "animate-pulse"} opacity-80 text-lg p-3 rounded-md bg-neutral-800 min-h-[80px]`}>{text ? text : "start speaking to convert to text"}</p>
                </div>
            </div>

            <div className='w-full flex gap-1 p-3 mt-5 items-end'>
                <Button className={`${!text && "opacity-50 bg-green-900 hover:bg-green-900 border-green-900 cursor-not-allowed" } text-xl font-bold bg-green-600 border-green-400 hover:bg-green-700 active:bg-green-800 p-1`}>Append</Button>
                <Button className='text-xl font-bold p-1' onClick={handleClose}>Cancel</Button>
            </div>
        </div>
    )
}

export default SpeechModal;