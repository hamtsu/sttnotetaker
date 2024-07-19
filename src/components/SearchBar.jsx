import { FaMicrophone, FaSearch, FaSearchPlus } from "react-icons/fa"
import Button from "./Button"

const SearchBar = () => {
    return (
        <div className="text-2xl w-full flex gap-3 items-center">
            <FaSearch className="text-neutral-300" size={30} />
            <input type="text" placeholder={"Search for a document or use speech recognition"} className="p-3 rounded-md w-[600px] border border-neutral-600" />
            <Button>
                <FaMicrophone className="text-neutral-300" size={30} />
            </Button>
        </div>
    )
}

export default SearchBar