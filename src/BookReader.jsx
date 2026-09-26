import { useLocation, useParams } from "react-router-dom"

function BookReader() {
  const { title } = useParams()
  const location = useLocation()

  const book = location.state?.book

  if (!book) {
    return <p>Book not found.</p>
  }

  return (
    <div className="reader-page">

      <header className="reader-header">
        <h1>BOOKIE</h1>
      </header>

      <main className="reader-content">
        <h2>{book.title}</h2>

        <p>{book.author}</p>

        <div className="reader-area">
  {book.pdf ? (
    <iframe
      src={book.pdf}
      title={book.title}
      width="100%"
      height="800px"
    ></iframe>
  ) : (
    <p>This book is not available to read yet.</p>
  )}
</div>
      </main>

    </div>
  )
}

export default BookReader