import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="col-md-4 mb-4">
      <Link
        to={`/event/${event._id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card">
          <img
            src={event.thumbnail}
            alt={event.title}
            className="card-img-top"
            style={{
              height: "250px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">
            <span className="badge bg-dark">
              {event.type}
            </span>

            <h4 className="mt-2">
              {event.title}
            </h4>

            <p>{event.startTime}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;