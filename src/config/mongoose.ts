import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true
})
