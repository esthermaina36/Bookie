import { useEffect, useState } from "react"
import BookReader from './BookReader'
import { Link, Routes, Route } from "react-router-dom"
import { supabase } from "./supabaseClient"
import './App.css'
import books from './data/books'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [books, setBooks] = useState([])

  const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchTerm.toLowerCase())
)
useEffect(() => {
  async function getBooks() {
    const { data, error } = await supabase
      .from("books")
      .select("*")

    if (error) {
      console.error("Error fetching books:", error)
      return
    }

    setBooks(data)
  }

  getBooks()
}, [])
 return (
     <Routes>

      <Route
        path="/"
        element={
          <div className="bookie">

      <header className="header">
        <h1>BOOKIE</h1>

        <input
          type="text"
          placeholder="Search book"
          className="search-bar"
          value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
        />
      </header>

      <main className="books-section">
        <div className="book-grid">

        {filteredBooks.map((book) => (
  <Link
  to={`/book/${encodeURIComponent(book.title)}`}
  state={{ book }}
  className="book-card"
  key={book.title}
>
    <img
      src={book.cover}
      alt={book.title}
      className="book-cover"
    />

    <div className="book-info">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
  </Link>
))}
            
        
        </div>
        </main>

      <footer>
        <p>© Maina Esther</p>

      </footer>

    </div>
        }
        />
         <Route
        path="/book/:title"
        element={<BookReader />}
      />

    </Routes>
  )
}

export default App
