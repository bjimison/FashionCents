// require Express, create an Express app
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

// add the body-parser middleware to the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ######################### ROUTES ##########################
// POST
app.post("/api/users/login", controllers.user.login);
app.post("/api/users/signup", controllers.user.signup);
app.post("/api/users/:user_id/update", controllers.user.updateProfile);
app.post("/api/users/:user_id/post", controllers.post.create);

// GET
app.get("/api/posts", controllers.post.index);
app.get("/api/posts/:title", controllers.post.show);
app.get("/api/posts/:category", controllers.post.getByCategory);
app.get("/api/posts/:date", controllers.post.getByDate);

// PUT

// DELETE

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 4000, () => {
  console.log("Express server is up and running on http://localhost:4000/");
});
