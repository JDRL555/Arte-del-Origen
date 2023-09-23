import express  from "express"
import morgan   from 'morgan'
import path     from 'path'

const app     = express()
const dirname = path.resolve()

app.use(morgan("common"))
app.use(express.static("src/static"))

app.set("port", 4000)
app.set("view engine", "ejs")
app.set("views", path.join(dirname, "src", "views"))

app.get("/", (req, res) => res.render("index"))

app.listen(4000, (req, res) => console.log(`Server running on: http://localhost:${app.get("port")}`))