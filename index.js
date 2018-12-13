import express from 'express'
import middlewareConfig from './config/middleware'
import './config/db'
import apiRoutes from './routes'
import userRoutes from './routes/user'
import { PORT } from './constants'

const app = express()
middlewareConfig(app)

app.get('/', (req, res) => {
  res.send('Welcome to IMS Back')
})

app.use('/api', apiRoutes)
app.use('/user', userRoutes)

app.listen(PORT, err => {
  if (err) console.log(err)
  else console.log(`Server Listen on http://localhost:${PORT}`)
})
