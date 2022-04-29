const User = require("./User");
const Post = require("./Post");

// create associations to reference id colums between tables (one to one or one to many)
//you can also add the on cascade delete attribute
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
