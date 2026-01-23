function BookTable() {
  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Atomic Habits</td>
            <td>James Clear</td>
            <td>
              <button>View</button>
            </td>
          </tr>
          

        </tbody>
      </table>
    </div>
  )
}

export default BookTable
