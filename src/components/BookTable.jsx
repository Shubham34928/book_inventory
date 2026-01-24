
import { useNavigate } from 'react-router-dom'
import "./BookTable.css"


function BookTable({ books, onDelete, onEdit }) {



  const navigate = useNavigate()
  return (
<div className="tablecontainer">
    

      <table width="100%">

        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
            
          </tr>
        </thead> 

                  <tbody>
                  {books.map((book) => (
                    <tr key={book.id}> 
                      <td>
                             <img src={book.image} alt={book.title || "Book cover" } className="cover" />
                      </td>
                      <td ><div className="book-title">{book.title}</div></td>
                      <td> <div className="author">{book.author}</div></td>
                     <td>
                        <div className="actionbtn">
                          <button onClick={() =>navigate(`/book/${book.id}`, { state: { book } })}>View</button>
                          
                      {book.isUserAdded && (<>
                     <button onClick={() => {onEdit(book) 
                      navigate("/add-book")}}>Edit</button>

                      <button onClick={() => onDelete(book.id)}>Delete</button>
                                          </>
                         )}
                         </div>  
                     </td>
                    </tr>
                  ))}
                </tbody>


      </table>
    </div>
  )
}

export default BookTable
