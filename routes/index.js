import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h2>Initial Route</h2>')
})

export default router
