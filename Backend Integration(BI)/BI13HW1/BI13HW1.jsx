import { useEffect, useState } from "react";

const BI13HW1 = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] =
    useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/books"
        );

        const data =
          await response.json();

        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  const deleteBookHandler = async (
    bookId
  ) => {
    try {
      const response = await fetch(
        `http://localhost:3000/books/${bookId}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await response.json();

      setMessage(data.message);

      setBooks((prevBooks) =>
        prevBooks.filter(
          (book) => book._id !== bookId
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Books List</h1>

      {message && (
        <p>
          <strong>{message}</strong>
        </p>
      )}

      {books.length === 0 ? (
        <p>No Books Available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              {book.title}

              <button
                onClick={() =>
                  deleteBookHandler(
                    book._id
                  )
                }
                style={{
                  marginLeft: "10px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BI13HW1;