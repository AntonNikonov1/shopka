import express from 'express'

const router = express.Router()

router.get('/test', (res, req) => {
  console.log(res, 'res')
  console.log(req, 'req')
})

export default router
// module.exports = router
