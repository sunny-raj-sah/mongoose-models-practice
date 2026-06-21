import { useBooks } from "./BookContext";

function FilterBooks() {
  const { books,   setFilter } = useBooks();

  const all = books.length;
  const read = books.filter((book) => book.status === "Read").length;
  const unread = books.filter((book) => book.status === "Unread").length;

  return (
    <div style={{ margin: "20px 0" }}>
      <button onClick={() => setFilter("all")}>
        All Books ({all})
      </button>

      <button onClick={() => setFilter("read")}>
        Read Books ({read})
      </button>

      <button onClick={() => setFilter("unread")}>
        Unread Books ({unread})
      </button>
    </div>
  );
}

export default FilterBooks;