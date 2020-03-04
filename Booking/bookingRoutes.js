const express = require("express");

const Booking = require("./booking-model");

const router = express.Router();

router.get("/", (req, res) => {
  Booking.find()
    .then(booking => {
      res.status(200).json(booking);
    })
    .catch(error => {
      res.status(500).json({ error: "Was not able to retrieve" });
    });
});

// router.get("/:id/users", (req, res) => {
//   const { id } = req.params;

//   Booking.findUser(id)
//     .then(user => {
//       if (user) {
//         res.json(user);
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find user for this booking" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({ message: "Failed to get user" });
//     });
// });

router.post("/", (req, res) => {
  const booking = req.body;
  Booking.add(booking)
    .then(book => {
      res.status(201).json({ message: "succesfully created a booking" });
    })
    .catch(error => {
      res.status(400).json({ error: "was not able to create a booking" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Booking.findUser(id)
    .then(booking => {
      if (booking) {
        Booking.update(changes, id).then(updatedBooking => {
          res.json({ ...changes, id: id });
        });
      } else {
        res
          .status(404)
          .json({ message: "could not find booking with given id" });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "failed to update booking" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Booking.findUser(id)
    .then(booking => {
      Booking.remove(id)
        .then(deleted => {
          if (deleted) {
            res.json({ removed: deleted, removedBooking: booking });
          } else {
            res
              .status(404)
              .json({ message: "Could not find booking with given id" });
          }
        })
        .catch(error => {
          res.status(500).json({ message: "failed to delete booking" });
        });
    })

    .catch(error => {
      res.status(500).json({ message: "failed to remove booking" });
    });
});

module.exports = router;
