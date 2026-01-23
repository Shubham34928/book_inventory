import { useEffect, useState } from 'react'
import Header from './components/Header'
import BookTable from './components/BookTable'

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    booksdata();
  }, [])

  async function booksdata(){
    try {
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
      const data = await response.json()

      const bookdata = data.items.map((item, index) => ({
        id: index,
        title: item.volumeInfo.title || "No Title",
        author: item.volumeInfo.authors?.[0] || "No Author",
        image: item.volumeInfo.imageLinks?.thumbnail || "No Image"
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

      {loading && <p>Loading books...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && <BookTable books={books} />}
    </div>
  )
}

export default App
