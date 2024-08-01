import { useState, useEffect, useRef } from 'react';
import ModalTitle from './ModalTitle';
import Button from '../Button';
import TextInput from '../TextInput';
import StartSpeechRecognition from '../StartSpeechRecognition';

const DocumentCreateModal = ({ handleClose, closable }) => {
    const [title, setTitle] = useState('');
    const [titleInvalid, setTitleInvalid] = useState(false);
    const inputRef = useRef(null);

    const submit = (title) => {
        if (title.length > 1 && title.length < 25) {
            const storedDocumentList = localStorage.getItem("documentData");
            let id;

            if (storedDocumentList) {
                const documentList = JSON.parse(storedDocumentList);
                documentList.push({
                    name: title,
                    lastEdited: (new Date()).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }),
                    content: ""
                });
                localStorage.setItem("documentData", JSON.stringify(documentList));

                id = documentList.length - 1;
            }

            handleClose();
            window.location.href = "/sttnotetaker/#/document/" + id;
        } else {
            console.log(title)
            setTitleInvalid(true);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent form submission
                submit(title);
            }

            if (e.key === 'Escape' && closable) {
                handleClose();
            }
        };

        const inputElement = inputRef.current;
        if (inputElement) {
            inputElement.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            if (inputElement) {
                inputElement.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, [closable, handleClose, title]);

    const appendTranscript = (transcript) => {
        submit(transcript)
    }

    return (
        <div className='min-w-[400px] md:min-w-[700px]'>
            <ModalTitle closable={closable} handleClose={handleClose}>Create a new document</ModalTitle>

            <div className='flex flex-col gap-1 w-full p-1 py-4 px-3'>
                <h3 className='font-semibold opacity-50 text-xl'>Name this document</h3>
                <div className='flex gap-3'>
                    <TextInput
                        ref={inputRef}
                        onChangeEx={(e) => setTitle(e.target.value)}
                        invalid={titleInvalid}
                        setInvalid={setTitleInvalid}
                    />
                    <StartSpeechRecognition appendTranscript={appendTranscript} />
                </div>
            </div>

            <div className='w-full flex gap-1 p-3 items-end'>
                <Button onClick={() => submit(title)} className={`${titleInvalid ? "opacity-50 bg-green-900 hover:bg-green-900 border-green-900 cursor-not-allowed" : ""} text-xl font-bold bg-green-600 border-green-400 hover:bg-green-700 active:bg-green-800 p-1`}>Create</Button>
                <Button className='text-xl font-bold p-1' onClick={handleClose}>Cancel</Button>
            </div>
        </div>
    );
};

export default DocumentCreateModal;
