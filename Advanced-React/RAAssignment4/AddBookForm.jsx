import { useState } from "react";
import { useBooks } from "./BookContext";

function AddBookForm() {
  const { addBook } = useBooks();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Unread");

  const handleSubmit = (e) => {
    e.preventDefault();

    addBook({
      title,
      author,
      status,
    });

    setTitle("");
    setAuthor("");
    setStatus("Unread");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <br />
      <br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Unread</option>
        <option>Read</option>
      </select>

      <br />
      <br />

      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;