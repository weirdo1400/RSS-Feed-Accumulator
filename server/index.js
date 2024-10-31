const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
require("dotenv").config();

app.use(cors()); // make requests from same device
app.use(express.json());

// Routers
const feedRouter = require("./routes/Feeds");
app.use("/feeds", feedRouter);
const articleRouter = require("./routes/Articles");
app.use("/articles", articleRouter);

// Synchronize database and start the server

console.log("ajsd");
db.sequelize
  .sync()
  .then(() => {
    console.log("await");
    app.listen(process.env.DB_PORT, () => {
      console.log(`Server running on port ${process.env.DB_PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });
