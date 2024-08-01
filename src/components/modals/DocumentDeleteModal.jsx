import { useEffect } from 'react'
import ModalTitle from './ModalTitle';
import Button from '../Button';

const DocumentDeleteModal = ({ handleClose, closable, id, name }) => {

    const deleteDocument = () => {
        const storedDocumentList = localStorage.getItem("documentData")

        if (storedDocumentList) {
            const documentList = JSON.parse(storedDocumentList)
            documentList.splice(id, 1)
            localStorage.setItem("documentData", JSON.stringify(documentList))
        }

        handleClose?.()
        window.location.href = "/sttnotetaker/#/"
    }
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
        <div className='min-w-[500px]'>
            <ModalTitle closable={closable} handleClose={handleClose}>Delete this document</ModalTitle>

            <div className='flex flex-col gap-1 w-full p-1 py-4 px-3 text-center'>
                <p className=' opacity-80 text-xl'>Are you sure you wish to delete "<b>{name}</b>"?</p>
                <p className='opacity-80 text-xl italic'>This action is irreverisble.</p>
            </div>

            <div className='w-full flex gap-1 p-3 items-end'>
                <Button onClick={deleteDocument} className={`text-xl font-bold bg-red-600 border-red-400 hover:bg-red-700 active:bg-red-800 p-1`}>Delete</Button>
                <Button className='text-xl font-bold p-1' onClick={handleClose}>Cancel</Button>
            </div>
        </div>
    )
}

export default DocumentDeleteModal;