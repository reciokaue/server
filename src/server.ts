import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()

const prisma = new PrismaClient()

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server listening on http://localhost:3333')
  })

app.get('/', async () => {
  const users = await prisma.user.findMany()

  return users
})
