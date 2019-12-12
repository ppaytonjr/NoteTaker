const fs = require("fs");
const express = require("express");
const app = express();
const router = require("router");
const apiRoutes = require("../routes/apiRoutes");
const htmlRoutes = require("../routes/htmlRoutes");

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

module.exports = router;