import express from "express"

const app = express()
const PORT = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.status(404).json({exemple: "exemple"})
})

app.listen(PORT, () => {
    console.log(`serve on port: ${PORT}`)
})