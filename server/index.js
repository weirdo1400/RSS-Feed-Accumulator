const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const db = require('./models');

app.use(cors()); // make requests from same device
app.use(express.json());

// Routers
const feedRouter = require("./routes/Feeds");
app.use("/feeds", feedRouter);
const articleRouter = require("./routes/Articles");
app.use("/articles", articleRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server running on port ${port}");
    });
});
