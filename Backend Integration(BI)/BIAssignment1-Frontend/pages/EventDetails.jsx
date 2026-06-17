import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } =
    useParams();

  const [event, setEvent] =
    useState(null);

  useEffect(() => {
    fetch(
      `http://localhost:3000/events/${eventId}`
    )
      .then((res) => res.json())
      .then((data) =>
        setEvent(data)
      );
  }, [eventId]);

  if (!event) return <h2>Loading...</h2>;

  return (
   <div className="container mt-4">
  <h1>{event.title}</h1>

  <p>
    Hosted By:
    <strong> {event.hostedBy}</strong>
  </p>

  {/* Image + Speakers */}
  <div className="row mt-4">

    
    <div className="col-md-8">
      
      <img
        src={event.thumbnail}
        alt={event.title}
        className="img-fluid rounded w-100"
      />
    </div>

    <div className="col-md-4">


       {/* Event Information */}
  <div className="card p-4 mt-4">
    <h3>Event Information</h3>

    <p>
      <strong>Date & Time:</strong>
      <br />
      {event.startTime}
      <br />
      {event.endTime}
    </p>

    <p>
      <strong>Venue:</strong>
      <br />
      {event.venue}
      <br />
      {event.address}
    </p>

    <p>
      <strong>Price:</strong>
      <br />
      ₹ {event.price}
    </p>
  </div>
      <h3>
        Speakers ({event.speakers.length})
      </h3>

      {event.speakers.map(
        (speaker, index) => (
          <div
            className="card p-3 mb-3"
            key={index}
          >
            <div className="d-flex align-items-center">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="rounded-circle me-3"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                }}
              />

              <div>
                <h6 className="mb-0">
                  {speaker.name}
                </h6>

                <small>
                  {
                    speaker.designation
                  }
                </small>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  </div>

 
  {/* Details */}
  <div className="card p-4 mt-4">
    <h3>Details</h3>

    <p>{event.description}</p>
  </div>

  {/* Additional Information */}
  <div className="card p-4 mt-4">
    <h3>Additional Information</h3>

    <p>
      <strong>Dress Code:</strong>{" "}
      {event.dressCode}
    </p>

    <p>
      <strong>Age Restrictions:</strong>{" "}
      {event.ageRestrictions}
    </p>

    <div>
      <strong>Tags:</strong>
      <br />

      {event.tags.map((tag) => (
        <span
          key={tag}
          className="badge bg-danger me-2 mt-2"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

</div>
  );
};

export default EventDetails;