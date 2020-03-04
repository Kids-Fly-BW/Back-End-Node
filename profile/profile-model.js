const db = require("../data/dbconfig");

module.exports = {
  find,
  add,
  update,
  remove,
  findUser
};

function find() {
  return db("profiles");
  // .join("trips as t", "t.id", "booking.booking_id")
  // .select("*");
}

function findUser(id) {
  // console.log("works");
  return (
    db("profiles")
      // .join("users as u", "u.id", "profiles.user_id")
      // .select("*")
      .where("profiles.id", id)
  );
  // id: id
  // "id", id
}

async function add(profile) {
  const [id] = await db("profiles").insert(profile, "id");
  console.log("brown");

  return findUser(id);
}

function update(changes, id) {
  return db("profiles")
    .where({ id: id })
    .update(changes);
}

function remove(id) {
  return db("profiles")
    .where({ id: id })
    .delete(id);
}
