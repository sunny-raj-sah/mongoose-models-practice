import { useBooks } from "./BookContext";

function BookList() {
  const {
    books,
    filter,
    toggleStatus,
    deleteBook,
  } = useBooks();

  const filteredBooks = books.filter((book) => {
    if (filter === "read") {
      return book.status === "Read";
    }

    if (filter === "unread") {
      return book.status === "Unread";
    }

    return true;
  });

  if (filteredBooks.length === 0) {
    return <h3>No Books Found</h3>;
  }

  return (
    <div>
      {filteredBooks.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{book.title}</h3>

          <p>Author: {book.author}</p>

          <p>Status: {book.status}</p>

          <button onClick={() => toggleStatus(book.id)}>
            Mark as {book.status === "Read" ? "Unread" : "Read"}
          </button>

          <button
            onClick={() => deleteBook(book.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;