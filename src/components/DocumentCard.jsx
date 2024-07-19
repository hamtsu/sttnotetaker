import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const DocumentCard = ({ index, name, lastEdited, content }) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/document/${index}`)}
        className='bg-neutral-800 flex rounded-md flex-col border hover:border-slate-300 transition-colors hover:cursor-pointer border-neutral-700 overflow-hidden max-w-[260px]'>
            <div className='h-[200px] overflow-hidden p-2 text-sm opacity-80 select-none'>{content}</div>
            <div className='bg-neutral-900 flex gap-5 p-2 w-full'>
                <div className='flex-col'>
                    <h2 className='font-bold text-4xl'>{name}</h2>
                    <p className='opacity-50'>last edited <b>{lastEdited}</b></p>
                </div>

                <div onClick={() => console.log("delete")} className='mt-auto ml-auto hover:opacity-100 opacity-50 hover:text-red-400 '><FaTrashAlt /></div>
            </div>
        </div>
    )
}

export default DocumentCard