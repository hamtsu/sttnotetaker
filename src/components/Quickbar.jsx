import { FaMicrophone } from "react-icons/fa6"
import Button from "./Button"
import { FaUndoAlt } from "react-icons/fa"

const Quickbar = ({ saving }) => {
    return (
        <div className="flex gap-1 flex-col h-full sticky">
            <div className="rounded-md h-fit bg-neutral-900 p-3 text-xl font-bold">Saving</div>
            <div className="rounded-md h-fit w-fit bg-neutral-900 p-3 gap-2 text-xl font-bold flex-col flex">
                <Button><FaMicrophone size={30}/></Button>
                <Button><FaUndoAlt size={30}/></Button>
            </div>
        </div>
    )
}

export default Quickbar