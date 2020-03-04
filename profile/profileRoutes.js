const express = require("express");

const Profile = require("./profile-model");

const router = express.Router();

router.get("/", (req, res) => {
  Profile.find()
    .then(profile => {
      res.status(200).json(profile);
    })
    .catch(error => {
      res.status(500).json({ error: "Was not able to retrieve" });
    });
});

router.post("/", (req, res) => {
  //const profile = req.body;

  Profile.add(req.body)
    .then(profile => {
      //res.status(201).json({ message: "succesfully created a profile" });
      res.json(profile);
    })
    .catch(({ message }) => {
      res.json(message);
      //res.status(400).json({ error: "was not able to create profile" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Profile.findUser(id)
    .then(profile => {
      if (profile) {
        Profile.update(changes, id).then(updatedBooking => {
          res.json({ ...changes, id: id });
        });
      } else {
        res
          .status(404)
          .json({ message: "could not find profile with given id" });
      }
    })
    .catch(({ message }) => {
      res.json(message);
      //res.status(500).json({ message: "failed to update profile" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Profile.findUser(id)
    .then(profile => {
      Profile.remove(id)
        .then(deleted => {
          if (deleted) {
            res.json({ removed: deleted, removedBooking: profile });
          } else {
            res
              .status(404)
              .json({ message: "Could not find profile with given id" });
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
