import { FaMicrophone } from "react-icons/fa6";
import Button from "./Button";
import useModal from "../hooks/UseModal";
import SpeechModal from "./modals/SpeechModal";

const StartSpeechRecognition = ({ appendTranscript }) => {
  const { createModal } = useModal()

  const onClick = () => {
    createModal(<SpeechModal />, true, { appendTranscript })
  }

  return (
    <Button onClick={onClick} >
      <FaMicrophone size={30} />
    </Button>
  );
};

export default StartSpeechRecognition;
