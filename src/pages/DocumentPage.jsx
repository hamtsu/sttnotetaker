import { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { FaTrashAlt } from 'react-icons/fa'
import useModal from '../hooks/UseModal'
import DocumentDeleteModal from '../components/modals/DocumentDeleteModal'
import DocumentTextBox from '../components/DocumentTextBox'

const DocumentPage = () => {
    const { documentId } = useParams()
    const [documentData, setDocumentData] = useState([])

    const navigate = useNavigate()

    const { createModal } = useModal()

    const deleteDocument = () => {
        createModal(<DocumentDeleteModal id={documentId} name={documentData.name} />, true)
    }

    useEffect(() => {
        if (window.localStorage.getItem("documentData")) {
            setDocumentData(JSON.parse(window.localStorage.getItem("documentData"))[documentId])
        } else {
            navigate("/")
        }
    }, [documentId, navigate])

    return (
        <div className='h-screen flex flex-col'>
            <div className='flex gap-3 flex-col h-full animate-fade-in items-center'>

                <div className='flex flex-col gap-3 p-5 bg-neutral-900 shadow-md w-full'>
                    <div className='flex gap-2'>
                    <Button onClick={() => navigate("/")}><FaArrowLeftLong size={30} /></Button>
                    <Button onClick={deleteDocument} className="bg-red-600 border-red-400 hover:bg-red-700 active:bg-red-800"><FaTrashAlt size={30} /></Button>
                    </div>
                    <h1>Now editing <b>{documentData.name}</b></h1>
                </div>

                <DocumentTextBox documentId={documentId} content={documentData.content} />
            </div>
        </div>
    )
}

export default DocumentPage