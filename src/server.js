const express = require("express");

const app = express();

//Client requests via the route to the server
app.use("/example", express.static("example"));
app.use("/yeehaw", express.static("yeehaw"));

app.listen(5001, () => {
  console.log(`Server is listening on port 5001`);
});
