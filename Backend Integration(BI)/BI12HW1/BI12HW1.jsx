 import { useState } from "react";

const BI12HW1  = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const [savedBook, setSavedBook] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBookData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/books",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...bookData,
            publishedYear: Number(
              bookData.publishedYear
            ),
            rating: Number(bookData.rating),
            genre: [bookData.genre],
          }),
        }
      );

      const data = await response.json();

      setSavedBook(data);

      setBookData({
        title: "",
        author: "",
        publishedYear: "",
        genre: "",
        language: "",
        country: "",
        rating: "",
        summary: "",
        coverImageUrl: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={bookData.title}
          onChange={handleChange}
                     required
        />

        <br />
        <br />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={bookData.author}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="number"
          name="publishedYear"
          placeholder="Published Year"
          value={bookData.publishedYear}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={bookData.genre}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="language"
          placeholder="Language"
          value={bookData.language}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={bookData.country}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={bookData.rating}
          onChange={handleChange}
        />

        <br />
        <br />

        <textarea
          name="summary"
          placeholder="Summary"
          value={bookData.summary}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="coverImageUrl"
          placeholder="Cover Image URL"
          value={bookData.coverImageUrl}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Add Book
        </button>
      </form>

      {savedBook && (
        <div style={{ marginTop: "20px" }}>
          <h2>Book Added Successfully</h2>

          <h3>{savedBook.title}</h3>

          <p>
            <strong>Author:</strong>{" "}
            {savedBook.author}
          </p>

          <p>
            <strong>Published Year:</strong>{" "}
            {savedBook.publishedYear}
          </p>

          <p>
            <strong>Genre:</strong>{" "}
            {savedBook.genre?.join(", ")}
          </p>

          <p>
            <strong>Language:</strong>{" "}
            {savedBook.language}
          </p>

          <p>
            <strong>Country:</strong>{" "}
            {savedBook.country}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {savedBook.rating}
          </p>

          <p>
            <strong>Summary:</strong>{" "}
            {savedBook.summary}
          </p>

          {savedBook.coverImageUrl && (
            <img
              src={savedBook.coverImageUrl}
              alt={savedBook.title}
              width="200"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default BI12HW1 ;