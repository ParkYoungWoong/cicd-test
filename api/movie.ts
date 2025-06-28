import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

const { OMDB_API_KEY } = process.env

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { title, page, id } = JSON.parse(request.body as string)
  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&page=${page}`
  console.log('OMDB_API_KEY', OMDB_API_KEY, url)
  const { data } = await axios(url)
  response.status(200).json(data)
}
