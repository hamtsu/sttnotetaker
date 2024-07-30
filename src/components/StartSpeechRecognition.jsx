import { FaMicrophone } from "react-icons/fa6";
import Button from "./Button";
import useModal from "../hooks/UseModal";
import SpeechModal from "./modals/SpeechModal";
import { useState } from "react";

const StartSpeechRecognition = () => {
  const { createModal } = useModal()
  const [result, setResult] = useState("")

  const onClick = () => {
    createModal(<SpeechModal />, true, setResult)
  }

  return (
    <Button onClick={onClick} >
      <FaMicrophone size={30} />
    </Button>
  );
};

export default StartSpeechRecognition;
