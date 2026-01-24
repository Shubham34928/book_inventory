import { useLocation, useNavigate } from "react-router-dom"
import "./BookDetails.css"

function BookDetails() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const book = state?.book

  if (!book) {
    return <p className="bookerror">No book details available.</p>
  }

  return (
    <div className="bookcontainer">
      <button className="backbutton" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div className="bookheader">
        {book.image && (
          <img
            src={book.image}
            alt={book.title}
            className="bookcover"
          />
        )}

        <div className="bookinfoparent">
          <h2 className="booktitle">{book.title}</h2>

          <p className="bookinfo">
            <span>Author:</span> {book.author}
          </p>

          <p className="bookinfo">
            <span>Publisher:</span> {book.publisher}
          </p>

          <p className="bookinfo">
            <span>Published:</span> {book.date}
          </p>
        </div>
      </div>

      <div className="bookdescription">
        <h3>Description</h3>
        <p>{book.description}</p>
      </div>
       <div className="bookpreview">

        <button onClick={() => window.open(book.preview, "_blank")}> Preview</button>
      </div>
    </div>
  )
}

export default BookDetails
