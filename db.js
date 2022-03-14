import { PrismaClient } from '@prisma/client'

var global = {
  prisma: PrismaClient || undefined
}

export const prisma =
  new PrismaClient()

