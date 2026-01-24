

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
      const savebook = JSON.parse(localStorage.getItem("userBooks")) || []
      setBooks(savebook)
      booksdata()
}, [])


const addBook = (newBook) => {const updatedBooks = [newBook, ...books]
  setBooks(updatedBooks)
  const userBooks = updatedBooks.filter((book) => book.isUserAdded)
  localStorage.setItem("userBooks", JSON.stringify(userBooks))
}


 const deleteBook = (id) => {const updatedBooks = books.filter(book => book.id !== id)
  setBooks(updatedBooks)

  const userBooks = updatedBooks.filter(book => book.isUserAdded)
  localStorage.setItem("userBooks", JSON.stringify(userBooks))
}



  const updateBook = (updatedBook) => {const updatedBooks = books.map((book) => book.id === updatedBook.id ? updatedBook : book)
  setBooks(updatedBooks)

  const userBooks = updatedBooks.filter(book => book.isUserAdded)
  localStorage.setItem("userBooks", JSON.stringify(userBooks))
}


  async function booksdata() {
      let startindex=Math.floor(Math.random()*200)+1
    try {
      const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=javascript&startIndex=${startindex}&maxResults=20&key=${API_KEY}`

      )

  
      const data = await response.json()
    
      const bookdata = data.items.map((item, index) => ({
        id: item.id,
        title: item.volumeInfo.title || "No Title",
        author: item.volumeInfo.authors?.[0] || "No Author",
        image: item.volumeInfo.imageLinks?.thumbnail || "No Image",
        description: item.volumeInfo.description,
        date: item.volumeInfo.publishedDate,
        publisher: item.volumeInfo.publisher,
        preview:item.volumeInfo.previewLink
      }))
       console.log(bookdata);
    

      setBooks(prevBooks => [...prevBooks, ...bookdata])
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
        <Route path="/" element={<>
              {loading && <p>Loading books...</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              {!loading && !error && (
                <BookTable books={books} onDelete={deleteBook} onEdit={setEditingBook}/>)}
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
