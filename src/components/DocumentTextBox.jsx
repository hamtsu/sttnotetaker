import { useEffect, useRef, useState } from "react";
import Quickbar from "./Quickbar";

const DocumentTextBox = ({ content, documentId }) => {
    const [saving, setSaving] = useState("ready");
    const [currentContent, setCurrentContent] = useState(content);
    const currentContentRef = useRef(currentContent);
    currentContentRef.current = currentContent;

    const onChange = (e) => {
        console.log(e.target.value);
        setCurrentContent(e.target.value);
    };

    useEffect(() => {
        let timeout;

        const save = () => {
            if (currentContentRef.current) {
                const parsedData = JSON.parse(window.localStorage.getItem("documentData"));
                const documentData = parsedData[documentId];
                documentData.content = currentContentRef.current;

                parsedData[documentId] = documentData;

                window.localStorage.setItem("documentData", JSON.stringify(parsedData));
            }
        };

        const handleKeyDown = () => {
            setSaving("saving")
            clearTimeout(timeout);

            // save after one second of inactivity
            timeout = setTimeout(() => {
                console.log('Saved document changes');
                save();
                setSaving("saved")
            }, 1000);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timeout);
        };
    }, [documentId]);

    return (
        <div className="flex gap-1 w-full items-center justify-center overflow-scroll-x">
            <textarea
                onInput={onChange}
                className="bg-neutral-900 shadow-md h-[1000px] w-4/6 p-3 resize-none animate-fade-in-late outline-none border border-neutral-700"
                defaultValue={content}
                spellCheck={true}
            />
            
            <Quickbar saving={saving} />
        </div>
    );
};

export default DocumentTextBox;
