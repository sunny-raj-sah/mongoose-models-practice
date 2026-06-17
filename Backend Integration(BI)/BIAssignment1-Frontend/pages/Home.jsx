import {
  useEffect,
  useState,
} from "react";

import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";

const Home = () => {
  const [events, setEvents] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [type, setType] =
    useState("Both");

  useEffect(() => {
    fetch(
      "http://localhost:3000/events"
    )
      .then((res) => res.json())
      .then((data) =>
        setEvents(data)
      );
  }, []);

  const filteredEvents =
    events.filter((event) => {
      const matchesSearch =
        event.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        event.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        );

      const matchesType =
        type === "Both"
          ? true
          : event.type === type;

      return (
        matchesSearch &&
        matchesType
      );
    });

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="container mt-4">
        <div className="d-flex justify-content-between">
          <h1>Meetup Events</h1>

          <select
            className="form-select w-25"
            value={type}
            onChange={(e) =>
              setType(
                e.target.value
              )
            }
          >
            <option>Both</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>

        <div className="row mt-4">
          {filteredEvents.map(
            (event) => (
              <EventCard
                key={event._id}
                event={event}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;