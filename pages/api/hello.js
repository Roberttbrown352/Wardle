// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function getServerSideProps(req, res) {
  const users = await prisma.user.findMany()
  res.status(200).json(users)
}
