import mongoose from 'mongoose'
import { DB_URL } from '../constants'

mongoose.Promise = global.Promise

mongoose.set('debug', true)

try {
  mongoose.connect(
    DB_URL,
    {
      useNewUrlParser: true
    }
  )
} catch (err) {
  mongoose.createConnection(DB_URL, {
    useNewUrlParser: true
  })
}

mongoose.connection
  .on('open', () => {
    console.log('MongoDB Running')
  })
  .on('error', e => {
    throw e
  })
