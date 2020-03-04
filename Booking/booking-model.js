const db = require("../data/dbconfig");

module.exports = {
  findUser,
  find,
  add,
  update,
  remove
};

function findUser(id) {
  console.log("works");
  return db("booking")
    .join("users as u", "u.id", "booking.user_id")
    .select("*")
    .where("booking.id", id);
  // id: id
  // "id", id
}

function find() {
  return db("booking");
  // .join("trips as t", "t.id", "booking.booking_id")
  // .select("*");
}

async function add(booking) {
  const [id] = await db("booking").insert(booking, "id");

  return findUser(id);
}

function update(changes, id) {
  return db("booking")
    .where({ id: id })
    .update(changes);
}

function remove(id) {
  return db("booking")
    .where({ id: id })
    .delete(id);
}
