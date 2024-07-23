import { useEffect, useState } from "react"
import CreateDocumentCard from "../components/CreateDocumentCard"
import DocumentCard from "../components/DocumentCard"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"

const HomePage = () => {
    const [documentData, setDocumentData] = useState([])

    useEffect(() => {
        if (window.localStorage.getItem("documentData")) {
            setDocumentData(JSON.parse(window.localStorage.getItem("documentData")))
        } else {
            window.localStorage.setItem("documentData", JSON.stringify([
                { name: "Class notes", "lastEdited": (new Date()).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }), content: "yes today last name test fall pool you hand face yes today last name test fall pool you hand faceyes today last name test fall pool you hand faceyes today last name test fall pool you hand faceyes today last name test fall pool you hand faceyes today last name test fall pool you hand fac"}
            ]))
        }
    }, [])

    return (
        <div className="h-screen flex flex-col">
            <div className='flex flex-col p-12 animate-fade-in'>
                <h1 className="text-7xl"><b>Voice-activated</b> Note taker</h1>

                <hr className="mt-10 mb-5 border-neutral-600"></hr>

                <section className="p-4 flex gap-6 flex-col">
                    <SearchBar />

                    <div className="flex gap-4">
                        <CreateDocumentCard />

                        {documentData.map((document, index) => (
                            <DocumentCard key={index} index={index} name={document.name} lastEdited={document.lastEdited} content={document.content} />
                        ))}

                    </div>

                </section>

            </div>
            <Footer />
        </div>
    )
}

export default HomePage