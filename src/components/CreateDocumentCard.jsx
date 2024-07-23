import useModal from "../hooks/UseModal"
import DocumentCreateModal from "./modals/DocumentCreateModal"

const CreateDocumentCard = () => {
    const { createModal } = useModal()

    const onClick = () => {
        createModal(<DocumentCreateModal />, true)
    }

    return (
        <div onClick={onClick} className='min-h-[300px] bg-neutral-800 flex items-center justify-center rounded-md flex-col border border-slate-300 transition-opacity opacity-40 hover:opacity-100 hover:cursor-pointer w-[250px]'>
            <p className='text-8xl text-neutral-300'>+</p>
            <p className="select-none text-xl">Create document</p>
        </div>

    )
}

export default CreateDocumentCard