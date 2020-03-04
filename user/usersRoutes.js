const express = require("express");

const User = require("./user-model");

const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ error: "Was not able to retrieve" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  User.findUser(id)
    .then(user => {
      User.remove(id)
        .then(deleted => {
          if (deleted) {
            res.json({ removed: deleted, removedBooking: user });
          } else {
            res
              .status(404)
              .json({ message: "Could not delete user with given id" });
          }
        })
        .catch(error => {
          res.status(500).json({ message: "failed to delete user" });
        });
    })

    .catch(error => {
      res.status(500).json({ message: "failed to remove user" });
    });
});

module.exports = router;
