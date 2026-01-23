
import { useNavigate } from 'react-router-dom'


function BookTable({ books, onDelete, onEdit }) {



    const navigate = useNavigate()
  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      <button onClick={() => navigate("/add-book")}>+ Add Book</button>

      <table border="1" width="100%">
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
                              <img src={book.image} alt={book.title} width="50"/>
                      </td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                     <td>
                          <button onClick={() =>navigate(`/book/${book.id}`, { state: { book } })}>View</button>
                          
                      {book.isUserAdded && (<>
                     <button onClick={() => {onEdit(book) 
                      navigate("/add-book")}}>Edit</button>

                      <button onClick={() => onDelete(book.id)}>Delete</button>
                                          </>
                         )}  
                     </td>
                    </tr>
                  ))}
                </tbody>


      </table>
    </div>
  )
}

export default BookTable
