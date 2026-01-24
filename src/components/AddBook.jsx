import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./AddBook.css"

function AddBook({ onAddBook, onUpdateBook, editingBook, setEditingBook }) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title)
      setAuthor(editingBook.author)
      setPublisher(editingBook.publisher)
      setEmail(editingBook.email)
      setDescription(editingBook.description)
      setImage(editingBook.image)
    }
  }, [editingBook])

  const submitbutton = (temp) => {
    temp.preventDefault()

    if (!title || !author || !publisher || !email || !description) {
      setError("All fields except image are required")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

    if (editingBook) {
      onUpdateBook({
        ...editingBook,
        title,
        author,
        publisher,
        email,
        description,
        image
      })
      setEditingBook(null)
      navigate("/")
      return
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      publisher,
      date: "7 November 2007",
      email,
      description,
      image: image || "https://covers.openlibrary.org/b/id/10523365-L.jpg",
      isUserAdded: true
    }

    onAddBook(newBook)

    setTitle("")
    setAuthor("")
    setPublisher("")
    setEmail("")
    setDescription("")
    setImage("")
    setError("")

    navigate("/")
  }
  return (
    <div className="bookcontainer">
      <h2 className="booktitle">
        {editingBook ? "Edit Book" : "Add Book"}
      </h2>

      {error && <div className="formerror">{error}</div>}

      <form className="addbookbtn" onSubmit={submitbutton}>
                    <input type="text" placeholder="Book Title" value={title} onChange={(temp) => setTitle(temp.target.value)}/>

                    <input type="text" placeholder="Author Name" value={author} onChange={(temp) => setAuthor(temp.target.value)}/>

                    <input type="text" placeholder="Publisher Name"value={publisher} onChange={(temp) => setPublisher(temp.target.value)}/>

                    <input type="email" placeholder="Email" value={email} onChange={(temp) => setEmail(temp.target.value)} />

                    <textarea placeholder="Book Description" value={description} onChange={(temp) => setDescription(temp.target.value)}/>

                    <input type="text" placeholder="Image URL (optional)" value={image} onChange={(temp) => setImage(temp.target.value)}/>

                    <div className="formbuttons">
                      <button type="submit" className="submitbtn">{editingBook ? "Update Book" : "Add Book"} </button>

                      <button type="button" className="cancelbtn" onClick={() => navigate("/")}>Cancel</button>
                    </div>
      </form>
    </div>
  )
}

export default AddBook
