import crypto from 'crypto'
import multer from 'multer'
import path from 'path'

export const config = {
  storage: multer.diskStorage({
    destination: (_request, _file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp'))
    },
    filename: (_request, file, callback) => {
      crypto.randomBytes(8, (error, hash) => {
        if (error) {
          return callback(error, '')
        }

        const sanitizedName = file.originalname.replace(' ', '_')
        const filename = `${hash.toString('hex')}-${sanitizedName}`
        callback(null, filename)
      })
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (_request, file, callback) => {
    const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif']
    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true)
    } else {
      callback(new Error('Invalid media type.'))
    }
  }
}
