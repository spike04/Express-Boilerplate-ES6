import morgan from 'morgan'
import express from 'express'
import cors from 'cors'

import { isDev } from '../constants'

export default app => {
  app.use(morgan(isDev ? 'dev' : 'common'))
  app.use(cors())
  app.use(express.json())
}
