const router = require("express").Router();
const fs = require("fs");

//ROUTES API

router.get("/notes", function (req, res) {
    fs.readFile("db/db.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("Could not read file", err);
            return;
        }
        res.json(JSON.parse(jsonString));
    });
});

router.post("/notes", function (req, res) {
    const rawdata = fs.readFileSync("db/db.json");
    const parsedata = JSON.parse(rawdata);
    const newObj = parsedata.concat(body);
    const string = JSON.stringify(newObj);
    fs.writeFile("db/db.json", string, (err) => {
        if (err) console.log(err);
        res.json(string);
    });
});

router.delete("/notes/:title", function (req, res) {
    const rawdata = fs.readFileSync("db/db.json");
    const parsedata = JSON.parse(rawdata);
    const { title } = req.params;
    const newData = parsedata.filter(o => o.title !== title);
    fs.writeFile("db/db.json", JSON.stringify(newData), (err) => {
        if (err) console.log(err);
        res.json(newData);
    });
});

module.exports = router;