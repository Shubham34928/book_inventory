import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

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

  const handleSubmit = (e) => {
    e.preventDefault()

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
    <div style={{ maxWidth: "450px", margin: "20px auto" }}>
      <h2>{editingBook ? "Edit Book" : "Add Book"}</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Publisher Name"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Book Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          {editingBook ? "Update Book" : "Add Book"}
        </button>

        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default AddBook
