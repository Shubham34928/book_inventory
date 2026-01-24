

import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BookTable from './components/BookTable'
import BookDetails from './components/BookDetails'
import AddBook from './components/AddBook'

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY




function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [editingBook, setEditingBook] = useState(null)

 useEffect(() => {
  const storedbooks = localStorage.getItem("books")

  if (storedbooks) { setBooks(JSON.parse(storedbooks))
    setLoading(false)
  } else {
    booksdata()
  }
}, [])


useEffect(() => {
  if (books.length > 0) {
    localStorage.setItem("books", JSON.stringify(books))
  }
}, [books])




const addBook = (newBook) => {
  const bookflag = {...newBook,bookadded: true}

  setBooks(prevBooks => [bookflag, ...prevBooks])
}


  const deleteBook = (id) => {setBooks(prevBooks => prevBooks.filter(book => book.id !== id))}

  const updateBook = (updatedBook) => {setBooks(prevBooks =>prevBooks.map(book => book.id === updatedBook.id ? updatedBook : book ) )}

  async function booksdata() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=javascript&key=${API_KEY}`
      )
      const data = await response.json()
        console.log(data);
      const bookdata = data.items.map((item, index) => ({
        id: index,
        title: item.volumeInfo.title || "No Title",
        author: item.volumeInfo.authors?.[0] || "No Author",
        image: item.volumeInfo.imageLinks?.thumbnail || "No Image",
        description: item.volumeInfo.description,
        date: item.volumeInfo.publishedDate,
        publisher: item.volumeInfo.publisher,
        preview:item.volumeInfo.previewLink,
        booadded: false
      }))
       console.log(bookdata);
    

      setBooks(bookdata)

    } catch(err){
      setError("Failed to fetch books. Please try again.",err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {loading && <p>Loading books...</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              {!loading && !error && (
                <BookTable
                  books={books}
                  onDelete={deleteBook}
                  onEdit={setEditingBook}
                />
              )}
            </>
          }
        />

        <Route path="/book/:id" element={<BookDetails />} />

        <Route
          path="/add-book"
          element={<AddBook onAddBook={addBook} onUpdateBook={updateBook} editingBook={editingBook}setEditingBook={setEditingBook}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
