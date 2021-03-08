const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

// Route files
const users = require('./routes/users')
const calendars = require('./routes/calendars')

const app = express()

app.use(express.json())

app.use('/api/v1/users', users)
app.use('/api/v1/calendars', calendars)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`.green.bold)
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process with failure
  server.close(() => process.exit(1))
})
