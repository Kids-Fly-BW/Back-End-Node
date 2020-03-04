const db = require("../data/dbconfig");

module.exports = {
  add,
  findBy
};

function findBy(filter) {
  console.log(filter);
  return db("users")
    .where(filter)
    .select("id", "username", "password")
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findBy({ id });
}
