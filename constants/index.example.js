export const isDev = process.env.NODE_ENV === 'development'

const DB_HOST = 'ENTER_DB_HOST'
const DB_PORT = 'ENTER_DB_PORT'
const DB_NAME = 'ENTER_DB_NAME'
const DB_USERNAME = 'ENTER_DB_USERNAME'
const DB_PASSWORD = 'ENTER_DB_PASSWORD'

export const DB_URL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
export const PORT = 3456
