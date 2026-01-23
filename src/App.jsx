import Header from './components/Header'
import BookTable from './components/BookTable'
import bookdata from './data/bookdata'

function App() {
  return (
    <div>
       <Header/>
       <BookTable books={bookdata}/>
    </div>

    
  )
}

export default App
