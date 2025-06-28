import { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(_req: VercelRequest, res: VercelResponse) {
  console.log(123)
  res.status(200).json({
    name: 'HEROPY',
    age: 85,
    city: 'Seoul'
  })
}
