 import { useState } from "react";

const BI12HW2 = () => {
  const [hotelId, setHotelId] = useState("");

  const [hotelData, setHotelData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const [savedHotel, setSavedHotel] =
    useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setHotelData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/hotels/${hotelId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...hotelData,
            rating: Number(
              hotelData.rating
            ),
            amenities:
              hotelData.amenities
                .split(",")
                .map((item) =>
                  item.trim()
                ),
            photos: [
              hotelData.photos,
            ],
          }),
        }
      );

      const data = await response.json();

      setSavedHotel(data);

      setHotelId("");

      setHotelData({
        name: "",
        category: "",
        location: "",
        rating: "",
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime: "",
        amenities: "",
        priceRange: "",
        reservationsNeeded: false,
        isParkingAvailable: false,
        isWifiAvailable: false,
        isPoolAvailable: false,
        isSpaAvailable: false,
        isRestaurantAvailable: false,
        photos: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Update Hotel</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hotel ID"
          value={hotelId}
          onChange={(e) =>
            setHotelId(e.target.value)
          }
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="name"
          placeholder="Hotel Name"
          value={hotelData.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <select
          name="category"
          value={hotelData.category}
          onChange={handleChange}
        >
          <option value="">
            Select Category
          </option>
          <option value="Budget">
            Budget
          </option>
          <option value="Mid-Range">
            Mid-Range
          </option>
          <option value="Luxury">
            Luxury
          </option>
          <option value="Resort">
            Resort
          </option>
        </select>

        <br />
        <br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={hotelData.location}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={hotelData.rating}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="website"
          placeholder="Website"
          value={hotelData.website}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={hotelData.phoneNumber}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="checkInTime"
          placeholder="Check In Time"
          value={hotelData.checkInTime}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="checkOutTime"
          placeholder="Check Out Time"
          value={hotelData.checkOutTime}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="amenities"
          placeholder="Amenities (comma separated)"
          value={hotelData.amenities}
          onChange={handleChange}
        />

        <br />
        <br />

        <select
          name="priceRange"
          value={hotelData.priceRange}
          onChange={handleChange}
        >
          <option value="">
            Select Price Range
          </option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">
            $$$$
          </option>
        </select>

        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={
              hotelData.reservationsNeeded
            }
            onChange={handleChange}
          />
          Reservations Needed
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={
              hotelData.isParkingAvailable
            }
            onChange={handleChange}
          />
          Parking Available
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={
              hotelData.isWifiAvailable
            }
            onChange={handleChange}
          />
          Wifi Available
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={
              hotelData.isPoolAvailable
            }
            onChange={handleChange}
          />
          Pool Available
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={
              hotelData.isSpaAvailable
            }
            onChange={handleChange}
          />
          Spa Available
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={
              hotelData.isRestaurantAvailable
            }
            onChange={handleChange}
          />
          Restaurant Available
        </label>

        <br />
        <br />

        <input
          type="text"
          name="photos"
          placeholder="Photo URL"
          value={hotelData.photos}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Update Hotel
        </button>
      </form>

      {savedHotel && (
        <div>
          <h2>
            {savedHotel.message}
          </h2>

          <p>
            <strong>Name:</strong>{" "}
            {savedHotel.hotel?.name}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {savedHotel.hotel?.category}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {savedHotel.hotel?.location}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {savedHotel.hotel?.rating}
          </p>
        </div>
      )}
    </div>
  );
};

export default BI12HW2;