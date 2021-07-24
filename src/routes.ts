import { Router } from 'express'
import multer from 'multer'

import { config } from './config/multer'
import { Post } from './models/Post'

export const routes = Router()

routes.get('/posts', async (_request, response) => {
  const posts = await Post.find()
  return response.json(posts)
})

routes.post('/posts', multer(config).single('file'), async (request, response) => {
  const { originalname: name, size, filename: key } = request.file
  const post = await Post.create({ name, size, key, url: '' })

  return response.status(201).json(post)
})
