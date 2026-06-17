import useFetch from "./useFetch";

function BI11HW1() {
  const {
    data: books,
    loading: booksLoading,
    error: booksError,
  } = useFetch(
    "http://localhost:3000/books",
    []
  );

  const {
    data: shoeDog,
    loading: shoeDogLoading,
    error: shoeDogError,
  } = useFetch(
    "http://localhost:3000/books/Shoe Dog",
    {}
  );

  const {
    data: harperLeeBooks,
    loading: harperLoading,
    error: harperError,
  } = useFetch(
    "http://localhost:3000/books/author/Harper Lee",
    []
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Books</h1>

      {booksLoading && <p>Loading...</p>}
      {booksError && <p>{booksError}</p>}

      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title}
          </li>
        ))}
      </ul>

      <h1>Shoe Dog</h1>

      {shoeDogLoading && <p>Loading...</p>}
      {shoeDogError && <p>{shoeDogError}</p>}

      {shoeDog.title && (
        <>
          <p>
            <strong>Author:</strong>{" "}
            {shoeDog.author}
          </p>

          <p>
            <strong>Release Year:</strong>{" "}
            {shoeDog.publishedYear}
          </p>

          <p>
            <strong>Genre:</strong>{" "}
            {shoeDog.genre}
          </p>
        </>
      )}

      <h1>Books by Harper Lee</h1>

      {harperLoading && <p>Loading...</p>}
      {harperError && <p>{harperError}</p>}

      <ul>
        {harperLeeBooks.map((book) => (
          <li key={book._id}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BI11HW1;