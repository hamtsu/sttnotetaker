import { useParams } from 'react-router-dom'

const DocumentPage = () => {
    const { documentId } = useParams()

  return (
    <div>DocumentPage {documentId}</div>
  )
}

export default DocumentPage