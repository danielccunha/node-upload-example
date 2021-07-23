import chalk from 'chalk'
import express from 'express'

const app = express()

app.listen(3333, () => console.log(`Successfully started server on port ${chalk.yellow('3333')}`))
