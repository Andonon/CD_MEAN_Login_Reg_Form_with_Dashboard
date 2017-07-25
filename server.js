// --*REQUIREMENTS*--
const express = require("express")
const path = require("path")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
// --*CONFIGURATION*--
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./client/dist")))
app.use(session({
    secret: "aksjdhaksjdhakjsdh",
    resave: false,
    saveUninitialized: true
}))
// --*DATABASE*--
require("./server/config/mongoose.js")
// --*ROUTES*--
require("./server/config/routes.js")(app);
// --*SERVER*--
const server = app.listen(8000, function() {
 console.log("listening on port 8000");
})
