import mongoose, { Schema, Document } from 'mongoose'

export interface IPost extends Document {
  name: string
  size: number
  key: string
}

const PostSchema = new Schema<IPost>({
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

PostSchema.pre<IPost>('save', function () {
  // TODO: Assign development URL
})

PostSchema.pre<IPost>('remove', function () {
  // TODO: Handle delete
})

export const Post = mongoose.model<IPost>('Post', PostSchema)
