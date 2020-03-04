const db = require("../data/dbconfig");

module.exports = {
  find,
  remove,
  findUser
};

function find() {
  return db("users");
}

function findUser(id) {
  // console.log("works");
  return (
    db("users")
      // .join("users as u", "u.id", "profiles.user_id")
      // .select("*")
      .where("users.id", id)
  );
  // id: id
  // "id", id
}

function remove(id) {
  return db("users")
    .where({ id: id })
    .delete(id);
}
