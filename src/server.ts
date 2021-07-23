import chalk from 'chalk'
import express from 'express'
import morgan from 'morgan'

import { routes } from './routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(routes)

app.listen(3333, () => {
  return console.log(`Successfully started server on port ${chalk.yellow('3333')}`)
})
