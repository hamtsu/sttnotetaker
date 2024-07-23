import { FaTimes } from 'react-icons/fa';
import Button from '../Button';

const ModalTitle = ({ closable, handleClose, children }) => {
    return (
        <div className="flex bg-slate-100 dark:bg-neutral-800 p-2 w-full rounded-t-lg">
            <div className="flex-grow text-3xl text-gray-700 dark:text-gray-300 font-semibold ml-1">
                {children}
            </div>
            {closable && (
                <Button className="bg-red-500 hover:bg-red-600 active:bg-red-700 border-red-400 px-2 py-1" onClick={handleClose}>
                    <FaTimes size={20} />
                </Button>
            )}
        </div>
    )
}

export default ModalTitle