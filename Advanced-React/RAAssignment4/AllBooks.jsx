import FilterBooks from "./FilterBooks";
import BookList from "./BookList";

function AllBooks() {
  return (
    <div>
      <h2>My Personal Library</h2>

      <FilterBooks />

      <BookList />
    </div>
  );
}

export default AllBooks;