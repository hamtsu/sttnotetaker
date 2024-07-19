import CreateDocumentCard from "../components/CreateDocumentCard"
import DocumentCard from "../components/DocumentCard"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"

const HomePage = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className='flex flex-col p-12'>
                <h1 className="text-7xl"><b>Voice-activated</b> Note taker</h1>

                <hr className="my-10 border-neutral-600"></hr>

                <section className="p-4 flex flex-col">
                    <SearchBar />

                    <div className="flex gap-4">
                        <CreateDocumentCard />
                        <DocumentCard name="Class notes" lastEdited={"12:17pm"} content={"yes today last name test fall pool you hand face yes today last name test fall pool you hand faceyes today last name test fall pool you hand faceyes today last name test fall pool you hand faceyes today last name test fall pool you hand faceyes today last name test fall pool you hand fac"} />
                    </div>
                    
                </section>

            </div>
            <Footer />
        </div>
    )
}

export default HomePage