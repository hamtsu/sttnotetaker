import { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'

const DocumentPage = () => {
    const { documentId } = useParams()
    const [documentData, setDocumentData] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        if (window.localStorage.getItem("documentData")) {
            setDocumentData(JSON.parse(window.localStorage.getItem("documentData"))[documentId])
        } else {
            navigate("/")
        }
    }, [documentId, navigate])

    return (
        <div className='h-screen flex flex-col'>
            <div className='flex flex-col p-5 m-5 h-full animate-fade-in'>
                <div className='flex flex-col gap-3'>
                    <Button onClick={() => navigate("/")}><FaArrowLeftLong size={30} /></Button>
                    <h1>Now editing <b>{documentData.name}</b></h1>
                </div>
                <hr className='my-5 border-neutral-600' />
                <div className='bg-neutral-700 rounded-md p-3 h-full animate-fade-in-late'>
                    <p>{documentData.content}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DocumentPage