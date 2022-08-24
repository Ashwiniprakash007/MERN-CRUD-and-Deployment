const express = require("express")
const cors = require("cors")
const connection = require("./config/db")
const userController = require("./routes/user.routes")
const todosController = require("./routes/todos.routes")
const authentication = require("./middleware/authentication")

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("Home page")
})

// middlewares
app.use("/user", userController)
app.use(authentication)
app.use("/todos", todosController)

app.listen(process.env.PORT, async () => {
    try{
        await connection
        console.log("DB connected")
    }
    catch(err){
        console.log("error occur")
        console.log(err)
    }
    console.log(`listening on port ${process.env.PORT}`)
})