import express from "express"

const app = express()

app.use(express.json())

app.get("/", (_, res) => {
  res.json({ status: "ok" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.clear()
  console.log(`🚀 Server is running on  localhost:${PORT}`)
})
