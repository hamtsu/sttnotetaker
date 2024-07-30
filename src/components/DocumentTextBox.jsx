import { useEffect, useRef, useState } from "react";
import Quickbar from "./Quickbar";
import findDiff from "../util/findDiff";

const DocumentTextBox = ({ content, documentId }) => {
    const [saving, setSaving] = useState("ready");
    const [currentContent, setCurrentContent] = useState(content);
    const [history, setHistory] = useState([]);
    const currentContentRef = useRef(currentContent);
    currentContentRef.current = currentContent;

    const onChange = (e) => {
        setCurrentContent(e.target.value);
    };

    const undo = () => {
        const parsedData = JSON.parse(window.localStorage.getItem("documentData")) || {};
        const documentData = parsedData[documentId] || { content: "", history: [] };

        if (history.length > 0) {
            const lastChange = history.pop();
            documentData.content = lastChange;
            parsedData[documentId] = documentData;

            window.localStorage.setItem("documentData", JSON.stringify(parsedData));
            setCurrentContent(lastChange);
            setHistory([...history]);
        }
    }

    const redo = () => {
        const parsedData = JSON.parse(window.localStorage.getItem("documentData")) || {};
        const documentData = parsedData[documentId] || { content: "", history: [] };

        if (history.length > 0) {
            const lastChange = history.pop();
            documentData.content = lastChange;
            parsedData[documentId] = documentData;

            window.localStorage.setItem("documentData", JSON.stringify(parsedData));
            setCurrentContent(lastChange);
            setHistory([...history]);
        }
    }

    useEffect(() => {
        let timeout;

        const save = () => {
            if (currentContentRef.current) {
                const parsedData = JSON.parse(window.localStorage.getItem("documentData")) || {};
                const documentData = parsedData[documentId] || { content: "", history: [] };

                if (documentData.content !== currentContentRef.current) {
                    setHistory(prevHistory => {
                        const newHistory = [...prevHistory, documentData.content];
                        documentData.history = newHistory;
                        documentData.content = currentContentRef.current;
                        
                        parsedData[documentId] = documentData;
                        window.localStorage.setItem("documentData", JSON.stringify(parsedData));

                        return newHistory;
                    });
                }
            }
        };

        const handleKeyDown = () => {
            setSaving("saving");
            clearTimeout(timeout);

            // save after one second of inactivity
            timeout = setTimeout(() => {
                console.log('Saved document changes');
                save();
                setSaving("saved");
            }, 1000);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            clearTimeout(timeout);
        };
    }, [documentId]);

    useEffect(() => {
        const parsedData = JSON.parse(window.localStorage.getItem("documentData")) || {};
        const documentData = parsedData[documentId] || { content: "", history: [] };
        setCurrentContent(documentData.content);
        setHistory(documentData.history || []);
    }, [documentId]);

    return (
        <div className="flex gap-1 w-full items-center justify-center overflow-scroll-x">
            <textarea
                onInput={onChange}
                className="bg-neutral-900 h-screen shadow-md w-4/6 p-3 resize-none animate-fade-in-late outline-none border border-neutral-700"
                value={currentContent}
                spellCheck={true}
            />
            
            <Quickbar saving={saving} undo={undo} undoDisabled={currentContent === "" || saving == "saving"} />
        </div>
    );
};

export default DocumentTextBox;
