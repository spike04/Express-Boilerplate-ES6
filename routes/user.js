import express from 'express'
const router = express.Router()
import { User } from '../models/user'

router.get('/', (req, res) => {
  User.find()
    .then(response => res.status(200).json(response))
    .catch(err => {
      throw err
    })
})

export default router
