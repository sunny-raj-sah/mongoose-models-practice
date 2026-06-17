const express = require("express");
const cors = require("cors");

const {
initializeDatabase,
} = require("../db/db.connect.js");

const Event = require("../mongoose-models/model.BI.Event.js");

const app = express();

app.use(express.json());

app.use(cors());

initializeDatabase();

app.get("/events", async (req, res) => {
  try {
    const events = await Event.find();

    res.json(events);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch events",
    });
  }
});

app.get(
  "/events/:eventId",
  async (req, res) => {
    try {
      const event =
        await Event.findById(
          req.params.eventId
        );

      res.json(event);
    } catch (error) {
      res.status(500).json({
        error: "Failed to fetch event",
      });
    }
  }
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});