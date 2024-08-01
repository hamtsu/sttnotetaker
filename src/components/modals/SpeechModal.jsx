import { useEffect, useState } from "react";
import Button from "../Button";
import { FaCircle, FaCircleExclamation } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

const SpeechModal = ({ handleClose, closable, modalProps }) => {
    const [isListening, setIsListening] = useState(false)
    const [transcript, setTranscript] = useState("")

    useEffect(() => {
        if (closable) {
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    handleClose()
                }
            });
        }

        if (!isListening) {
            recognition.start()
            setIsListening(true)
        }

        recognition.continuous = true
        recognition.interimResults = true

        recognition.onresult = (event) => {
            let interimTranscript = ""
            let finalTranscript = ""

            for (let i = 0; i < event.results.length; i++) {
                const transcriptPart = event.results[i][0].transcript
                if (event.results[i].isFinal) {
                    finalTranscript += transcriptPart
                } else {
                    interimTranscript += transcriptPart
                }
            }

            setTranscript(finalTranscript + interimTranscript)
        };

        recognition.onerror = (event) => {
            console.error(event.error)
        };

        recognition.onend = () => {
            setIsListening(false)
        };

        return () => {
            recognition.onresult = null
            recognition.onerror = null
            recognition.onend = null
            recognition.abort()
            closable && document.removeEventListener("keydown", () => { })
        };
    }, []);

    return (
        <div className="w-[700px] rounded-md bg-neutral-900 text-neutral-100 border border-neutral-800 overflow-hidden">
            <div className="flex">
                <div className="bg-neutral-300 border px-3 p-2  flex items-center gap-1">
                    <FaMicrophone className="text-neutral-500 text-2xl" />

                    {!isListening && !transcript ? (
                        <>
                            <FaCircleExclamation className="text-red-500 text-2xl" />
                            <p className="text-neutral-600 text-lg pl-2">
                                Microphone not detected!
                            </p>
                            <Button
                                className="text-xl font-bold p-1 bg-neutral-800"
                                onClick={() => {
                                    recognition.start();
                                    setIsListening(true);
                                }}
                            >
                                Retry
                            </Button>
                        </>
                    ) : !isListening && transcript ? (
                        <>
                            <FaCircleExclamation className="text-yellow-500 text-2xl" />
                            <p className="text-neutral-600 text-lg pl-2">Recording paused.</p>
                            <Button
                                className="text-xl font-bold p-1 bg-neutral-800"
                                onClick={() => {
                                    recognition.start();
                                    setIsListening(true);
                                }}
                            >
                                Start
                            </Button>
                        </>
                    ) : (
                        <>
                            <FaCircle className="text-green-600 animate-pulse text-2xl" />
                            <p className="text-neutral-600 text-lg pl-2">
                                Microphone recording...
                            </p>
                            <div className="flex flex-col gap-1">
                                <Button
                                    className="text-xl font-bold p-1 bg-neutral-800"
                                    onClick={() => {
                                        recognition.stop();
                                        setIsListening(false);
                                        setTranscript(" ");
                                    }}
                                >
                                    Clear
                                </Button>
                            </div>
                        </>
                    )}
                </div>

                <div className="flex flex-col gap-1 w-full p-1 py-4 px-3 text-center border-l-4 border-neutral-700">
                    <p
                        className={`opacity-80 text-lg p-3 rounded-md bg-neutral-800 min-h-[80px]`}
                    >
                        <span className={`${!transcript && "animate-pulse"}`}>
                            {transcript ? transcript : !isListening ? "Please ensure your microphone is properly connected as it is not being recognised. Please change the input in your browser's settings if necessary" : "start speaking to convert to text"}
                        </span>
                    </p>
                </div>
            </div>

            <div className="w-full flex gap-1 p-3 mt-5 items-end">
                <Button
                    onClick={() => { modalProps.appendTranscript(transcript); handleClose() }}
                    className={`${!transcript || transcript == " " &&
                        "opacity-50 bg-green-900 hover:bg-green-900 border-green-900 cursor-not-allowed"
                        } text-xl font-bold bg-green-600 border-green-400 hover:bg-green-700 active:bg-green-800 p-1`}
                >
                    Append
                </Button>
                <Button className="text-xl font-bold p-1" onClick={handleClose}>
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default SpeechModal;