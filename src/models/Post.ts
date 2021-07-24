import mongoose, { Schema, Document, Date } from 'mongoose'

export interface IPost extends Document {
  name: string
  size: number
  key: string
  url: string
  createdAt: Date
}

const PostSchema = new Schema(
  {
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
    }
  },
  {
    timestamps: {
      updatedAt: false
    }
  }
)

export const Post = mongoose.model<IPost>('Post', PostSchema)
