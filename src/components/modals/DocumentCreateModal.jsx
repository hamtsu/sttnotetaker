import { useState, useEffect } from 'react'
import ModalTitle from './ModalTitle';
import Button from '../Button';

const DocumentCreateModal = ({ handleClose, closable }) => {
    // const [title, setTitle] = useState('')
    // const [titleInvalid, setTitleInvalid] = useState<boolean>(false)

    // const submit = () => {
    //     if (title.length > 1) {

    //         const storedItemsList = localStorage.getItem("itemsList")

    //         if (storedItemsList) {
    //             const itemsList = JSON.parse(storedItemsList)
    //             itemsList.push({ title, body, tags: ["Doing"], priority: priority, createdAt: new Date() })
    //             localStorage.setItem("itemsList", JSON.stringify(itemsList))
    //             window.dispatchEvent(new Event('storage'))
    //         }

    //         handleClose?.()
    //     } else {
    //         setTitleInvalid(true)
    //     }
    // }

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
        <div className='min-w-[400px] md:min-w-[700px]'>
            <ModalTitle closable={closable} handleClose={handleClose}>Create a new document</ModalTitle>

            <div className='flex gap-1 w-full p-1'>
                

            </div>

            <div className='w-full flex gap-1 p-3 items-end'>
                <Button className='text-xl font-bold bg-green-600 border-green-400 hover:bg-green-700 active:bg-green-800 p-1'>Create</Button>
                <Button className='text-xl font-bold p-1' onClick={handleClose}>Cancel</Button>
            </div>
        </div>
    )
}

export default DocumentCreateModal;