require('dotenv').config()
// async errors

const express = require('express')
const app = express()

const notFoundMiddleWare = require('./middleware/not-found')
const errorMiddleWare = require('./middleware/error-handler')

// middleware
app.use(express.json())

// rootes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')
})

// products route
app.use(notFoundMiddleWare)
app.use(errorMiddleWare)

const port = process.env.PORT || 5001

const start = async () => {
  try {
    //connect DB
    app.listen(port, console.log(`Server is listening ${port}....`))
  } catch (error) {
    console.log(error)
  }
}

start()