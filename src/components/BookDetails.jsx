import { useLocation } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'


function BookDetails() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const book = state?.book

  if (!book) {
    return <p>No book details available.</p>
  }

  return (
    <div>
        
      <button onClick={() => navigate("/")}>Back to Home</button> 
      <br/>
      {book.image && (<img src={book.image} alt={book.title} width="200" />)}
      
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Published Date:</strong> {book.date}</p>
      <p><strong>Description:</strong>{book.description}</p>
      <p>{book.description}</p>
      


    </div>
  )
}

export default BookDetails
