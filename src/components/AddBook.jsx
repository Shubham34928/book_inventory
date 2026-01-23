import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddBook({ onAddBook }) {
  // Form state
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
   const [publisher, setPublisher] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [error, setError] = useState("")

  // Navigation hook
  const navigate = useNavigate()

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!title || !author || !email || !description || !publisher) {
      setError("All fields except image are required")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

    // Create new book object
    const newBook = {
      id: Date.now(),
      title,
      author,
      publisher,
      date:"7 Novemeber 2007",
      email,
      description,
      image: image || "https://covers.openlibrary.org/b/id/10523365-L.jpg",
      isUserAdded: true
    }

    // Send book to parent (App.jsx)
    onAddBook(newBook)

    // Reset form
    setTitle("")
    setAuthor("")
    setEmail("")
    setDescription("")
    setImage("")
    setError("")
    setPublisher("")

    // Navigate back to Home page
    navigate("/")
  }

  return (
    <div style={{ maxWidth: "450px", margin: "20px auto" }}>
      <h2>Add Book</h2>

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

        <button type="submit">Add Book</button>
        <button
          type="button"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default AddBook
