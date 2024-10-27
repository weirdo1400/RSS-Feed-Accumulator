const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
//import sequelize from './models/index.js';

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
    app.listen(3307, () => {
      console.log(`Server running on port ${3307}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });
