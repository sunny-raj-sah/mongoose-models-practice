const Navbar = ({
  search,
  setSearch,
}) => {
  return (
    <nav className="navbar p-3 border-bottom">
      <h2 className="text-danger">
        Meetup
      </h2>

      <input
        type="text"
        className="form-control w-25"
        placeholder="Search by title and tags"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </nav>
  );
};

export default Navbar;