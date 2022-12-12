const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//both express.urlencoded() and express.json() are Express middleware functions. They are responsible for providing and parsing the request.body data.

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Hello Kacper!" });
});

app.post("/api/users", (req, res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body);
  // we can push it into the users array for now...
  // later on this will be inserted into a database
  users.push(req.body);
  // we always need to respond with something
  res.json( { status: "ok" } );
  });

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );