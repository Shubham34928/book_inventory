import { useEffect, useState } from 'react'
import Header from './components/Header'
import BookTable from './components/BookTable'
import { Routes, Route } from 'react-router-dom'
import BookDetails from './components/BookDetails'
import AddBook from './components/AddBook'


function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    booksdata();
  }, [])

  const addBook = (newBook) => {
  const updatedBooks = [newBook, ...books]
  setBooks(updatedBooks)
   }


  async function booksdata(){
    try {
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
      const data = await response.json()
      
      const bookdata = data.items.map((item, index) => ({
        id: index,
        title: item.volumeInfo.title || "No Title",
        author: item.volumeInfo.authors?.[0] || "No Author",
        image: item.volumeInfo.imageLinks?.thumbnail || "No Image",
        description :item.volumeInfo.description,
        date:item.volumeInfo.publishedDate,
        publisher:item.volumeInfo.publisher
      
      }))
        
      setBooks(bookdata)
    } catch{
      setError("Failed to fetch books. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Header />
       <Routes>
            <Route path="/" element={
                                      <>
                                        {loading && <p>Loading books...</p>}
                                        {error && <p style={{ color: "red" }}>{error}</p>}
                                        {!loading && !error && <BookTable books={books} />}
                                      </>
                                          }/>
      <Route path="/book/:id" element={<BookDetails />} />

      <Route path="/add-book"element={<AddBook onAddBook={addBook} />}/>


      </Routes>
    </div>
  )
}

export default App
