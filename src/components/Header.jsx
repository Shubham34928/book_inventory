import { useNavigate, useLocation } from "react-router-dom"
import "./Header.css"

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const showAddButton = location.pathname !== "/add-book"

  return (
    <header className="header">
      <h1 className="title">Book Inventory</h1>

      {showAddButton && (
        <button className="addbtn"onClick={() => navigate("/add-book")}> Add Book</button>
      )}
    </header>
  )
}

export default Header
