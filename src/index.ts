import express from 'express'
import bodyParser from 'body-parser'
import models from './db/models'

const PORT = process.env.PORT || 8080

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '1mb' }))

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`)
})

app.get('/api/v1', (req, res) => {
  return res.status(200).json({ message: 'success' })
})

app.get('/api/v1/test', async (req, res) => {
  try {
    const items: any = await models.item.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: models.user,
          attributes: ['name']
        }
      ]
    })

    if (!items) {
      throw new Error('item cannot get')
    }
    res.status(200).json({ items })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
