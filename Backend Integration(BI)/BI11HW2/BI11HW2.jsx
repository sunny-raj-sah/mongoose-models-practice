import useFetch from "./useFetch";

function BI11HW2() {
  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
  } = useFetch(
    "http://localhost:3000/hotels",
    []
  );

  const {
    data: hotel,
    loading: hotelLoading,
    error: hotelError,
  } = useFetch(
    "http://localhost:3000/hotels/New Hotel 1",
    {}
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Hotels</h1>

      {hotelsLoading && <p>Loading...</p>}
      {hotelsError && <p>{hotelsError}</p>}

      <ul>
        {hotels.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}
          </li>
        ))}
      </ul>

      <h1>{hotel.name}</h1>

      {hotelLoading && <p>Loading...</p>}
      {hotelError && <p>{hotelError}</p>}

      {!hotelLoading && hotel.name && (
        <>
          <p>
            <strong>Location:</strong>{" "}
            {hotel.address}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {hotel.rating}
          </p>

          <p>
            <strong>Price Range:</strong>{" "}
            {hotel.priceRange}
          </p>
        </>
      )}
    </div>
  );
}

export default BI11HW2;