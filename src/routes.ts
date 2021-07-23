import { Router } from 'express'
import multer from 'multer'

import { config as multerConfig } from './config/multer'

export const routes = Router()

routes.post('/posts', multer(multerConfig).single('file'), (_request, response) => {
  return response.status(204).send()
})
