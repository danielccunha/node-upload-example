import mongoose, { Schema, Document } from 'mongoose'

export interface PostAttr extends Document {
  name: string
  size: number
  key: string
}

const PostSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: Number,
    required: true
  },
  key: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const Post = mongoose.model<PostAttr>('Post', PostSchema)
