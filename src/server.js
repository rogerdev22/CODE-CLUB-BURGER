//import app from "./app"
const app=require("./app")
const mainRoutes = require("./routes")


app.use(mainRoutes)
app.listen(3005)