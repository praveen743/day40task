const express = require("express");
const fs = require("fs");
const app = express();
const process = require("process");
console.log(process.argv);

app.get("/", function (req, res) {

    const date_ob = new Date();
    const date = `${("0" + (date_ob.getMonth() + 1)).slice(-2)}-${("0" + date_ob.getDate()).slice(-2)}-${date_ob.getFullYear()} ${date_ob.getHours()}:${date_ob.getMinutes()}`;

    fs.appendFile(`${process.argv[2]}/${date}.txt`, `${date}`, function (err) {
        if (err) throw err;
        res.json(`${date} saved`);
    })

})

app.listen(3004);
