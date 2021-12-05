import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import test from './api/routers/test'

const { PORT, DB_CONNECTION } = process.env

const app = express()

app.use('/test', (res, req) => {
  req.send({
    name: 'anton',
  })
})

const start = async () => {
  try {
    await mongoose.connect(DB_CONNECTION as string)

    app.listen(PORT, () => {
      console.log(`server is started in ${PORT} port`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
