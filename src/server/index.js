const { green } = require("chalk");
const app = require("./app");
const { db } = require('./database')

const PORT = process.env.PORT || 8080;

db.sync()
    .then(()=>{
        app.listen(PORT, () => console.log(green("listening on port"), PORT));
    })
