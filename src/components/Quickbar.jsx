import {
  FaFileArrowUp,
  FaRegCircleCheck,
  FaRegCircleDown,
} from "react-icons/fa6";
import Button from "./Button";
import { FaUndoAlt } from "react-icons/fa";
import StartSpeechRecognition from "./StartSpeechRecognition";

const Quickbar = ({ saving, undo, undoDisabled, appendTranscript }) => {

  return (
    <div className="flex gap-1 flex-col h-full sticky">
      <div className="rounded-md h-fit bg-neutral-900 p-3 text-xl font-bold text-center flex items-center gap-2">
        {saving == "ready" ? (
          <FaFileArrowUp size={30} />
        ) : saving == "saving" ? (
          <FaRegCircleDown size={30} className="animate-pulse text-yellow-400" />
        ) : (
          <FaRegCircleCheck size={30} className="text-green-500" />
        )}

        <span className="capitalize opacity-80 text-xl italic">{saving}</span>
      </div>
      <div className="rounded-md h-fit w-fit bg-neutral-900 p-3 gap-2 text-xl font-bold flex-col flex">
        <StartSpeechRecognition appendTranscript={appendTranscript} />
        <Button onClick={undo} className={`${undoDisabled && "opacity-50 cursor-not-allowed"} `}>
          <FaUndoAlt size={30} />
        </Button>
      </div>
    </div>
  );
};

export default Quickbar;
