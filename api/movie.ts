import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  const { data } = await axios(
    `https://www.omdbapi.com/?apikey=7035c60c&s=avengers`
  )
  res.status(200).json(data)
}
