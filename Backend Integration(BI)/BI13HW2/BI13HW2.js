import { useEffect, useState } from "react";

const BI13HW2 = () => {
  const [hotels, setHotels] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/hotels"
        );

        const data = await response.json();

        setHotels(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHotels();
  }, []);

  const deleteHotelHandler = async (
    hotelId
  ) => {
    try {
      const response = await fetch(
        `http://localhost:3000/hotels/${hotelId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);

        setHotels((prevHotels) =>
          prevHotels.filter(
            (hotel) =>
              hotel._id !== hotelId
          )
        );
      } else {
        setMessage(
          data.error ||
            "Failed to delete hotel"
        );
      }
    } catch (error) {
      console.log(error);
      setMessage(
        "Something went wrong."
      );
    }
  };

  return (
    <div>
      <h1>Hotels List</h1>

      {message && <h3>{message}</h3>}

      {hotels.length === 0 ? (
        <p>No Hotels Found</p>
      ) : (
        <ul>
          {hotels.map((hotel) => (
            <li
              key={hotel._id}
              style={{
                marginBottom: "10px",
              }}
            >
              {hotel.name}

              <button
                onClick={() =>
                  deleteHotelHandler(
                    hotel._id
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

export default BI13HW2;