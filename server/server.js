const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const controllers = require("./controllers");

app.use(cors());

// add the body-parser middleware to the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ######################### ROUTES ##########################
// POST
app.post("/api/users/login", controllers.user.login);
app.post("/api/users/signup", controllers.user.signup);
app.post("/api/users/:username/update", controllers.user.updateProfile);
app.post("/api/posts/create", controllers.post.create);

// GET
app.get("/api/users/:username/profile", controllers.user.profile);
app.get("/api/posts", controllers.post.index);
// app.get("/api/posts/:title", controllers.post.show);
// app.get("/api/posts/:category", controllers.post.getByCategory);

// PUT

// DELETE
// app.delete("/api/posts/:post_title", controllers.post.destroy);

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 4000, () => {
  console.log("Express server is up and running on http://localhost:4000/");
});
