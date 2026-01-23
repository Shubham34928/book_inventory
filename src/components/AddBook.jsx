import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddBook({ onAddBook }) {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
   const [publisher, setPublisher] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (temp) => {
    temp.preventDefault()

    if (!title || !author || !email || !description || !publisher) {
      setError("All fields except image are required")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

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


    onAddBook(newBook)


    setTitle("")
    setAuthor("")
    setEmail("")
    setDescription("")
    setImage("")
    setError("")
    setPublisher("")


    navigate("/")
  }

  return (
    <div style={{ maxWidth: "450px", margin: "20px auto" }}>
      <h2>Add Book</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(temp) => setTitle(temp.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(temp) => setAuthor(temp.target.value)}
        />

        <br /><br />

         <input
          type="text"
          placeholder="Publisher Name"
          value={publisher}
          onChange={(temp) => setPublisher(temp.target.value)}
        />
         <br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(temp) => setEmail(temp.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Book Description"
          value={description}
          onChange={(temp) => setDescription(temp.target.value)}
          rows="4"
        />

        <br /><br />

        <input
          type="text"
          placeholder="Image url (optional)"
          value={image}
          onChange={(temp) => setImage(temp.target.value)}
        />

        <br /><br />

        <button type="submit">Add Book</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default AddBook
