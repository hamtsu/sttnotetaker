import { FaSearch } from "react-icons/fa"
import StartSpeechRecognition from "./StartSpeechRecognition"
import { useState } from "react"

const SearchBar = ({ setSearchTerm }) => {
    const [transcript, setTranscript] = useState("")

    const appendTranscript = (transcript) => {
        setTranscript(transcript);
        setSearchTerm(transcript);
    }

    return (
        <div className="text-2xl w-full flex gap-3 items-center">
            <FaSearch className="text-neutral-300" size={30} />
            <input type="text" value={transcript} onFocus={() => setTranscript(null)} onChange={(e) => setSearchTerm(e.target.value)} placeholder={"Search for a document or use speech recognition"} className="p-3 rounded-md w-[600px] bg-neutral-800 border border-neutral-600" />
            <StartSpeechRecognition appendTranscript={appendTranscript} />
        </div>
    )
}

export default SearchBar