// require Express, create an Express app
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());

// add the body-parser middleware to the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/users/login", controllers.user.login);
app.post("/api/users/signup", controllers.user.signup);

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 4000, () => {
  console.log("Express server is up and running on http://localhost:4000/");
});
