import 'dotenv/config'

import fastify from 'fastify'
import { memeriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(memeriesRoutes)
app.register(authRoutes)

app.register(cors, {
  // origin: ['http://localhost:3000'],
  origin: true,
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server listening on http://localhost:3333')
  })
