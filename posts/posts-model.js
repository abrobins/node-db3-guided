const db = require("../data/config");

function findByUserId(userId) {
  return db("posts")
    .leftJoin("users", "users.id", "posts.user_id") // LEFT JOIN users.id = posts.user_id
    .where("user_id", userId) // where user_id = ?
    .select("posts.id", "posts.contents", "users.username"); // select posts.id, posts.contents, users.username
  // knex commands c
}
module.exports = {
  findByUserId
};
