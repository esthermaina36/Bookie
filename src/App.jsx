import { useState } from 'react'
import BookReader from './BookReader'
import { Link, Routes, Route } from "react-router-dom"
import './App.css'
import adanna from './assets/books/adanna.jpg'
import broken from './assets/books/broken.jpg'
import deadcertain from './assets/books/dead-certain.jpg'
import gonegirl from './assets/books/gone-girl.jpg'
import friendsloversandthebigterriblething from './assets/books/friends-lovers-and-the-big-terrible-thing.jpg'
import unbowed from './assets/books/unbowed.webp'
import verity from './assets/books/verity.jpg'
import thescore from './assets/books/the-score.jpg'
import thegoal from './assets/books/the-goal.jpg'
import thealchemist from './assets/books/the-alchemist.jpg'
import silentpatient from './assets/books/silent-patient.jpg'
import remindersofhim from './assets/books/reminders-of-him.jpg'
import marrywheniwant from './assets/books/marry-when-i-want.jpg'

const books = [
  {
    title: "unbowed",
    author: "Wangari Maathai",
    cover: unbowed,
  },
  {
    title: "Broken",
    author: "Fatima Bala",
    cover: broken,
  },
  {
    title: "The Alchemist",
    author: "Paul Coelho",
    cover: thealchemist,
  },
  {
    title: "Dead Certain",
    author: "Adam Mitzner",
    cover: deadcertain,
  },
  {
    title: "Verity",
    author: "Collen Hoover",
    cover: verity,
  },
  {
    title: "Reminders of Him",
    author: "Collen Hoover",
    cover: remindersofhim,
  },
   {
    title: "The score",
    author: "Elle Kennedy",
    cover: thescore,
  },
   {
    title: "The silent patient",
    author: "Alex Michaelides",
    cover: silentpatient ,
  },
   {
    title: "The gone girl",
    author: "Gillian Flyann",
    cover: gonegirl,
  },
   {
    title: "The Goal",
    author: "Elle Kennedy",
    cover: thegoal,
  },
   
   {
    title: "I will marry when I want",
    author: "Ngugi wa Thiong'o",
    cover: marrywheniwant,
  },
   {
    title: "Friends,Lovers and the big terrible thing",
    author: "Matthew Perry",
    cover: friendsloversandthebigterriblething,
  },
]



function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchTerm.toLowerCase())
)
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
    to={`/book/${book.title}`}
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
