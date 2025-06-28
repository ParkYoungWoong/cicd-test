import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    init()
  }, [])

  async function init() {
    const res = await fetch('/api/test')
    const data = await res.json()
    console.log('data::', data)
  }

  return (
    <div className="container mx-auto px-3 py-5">
      <h1 className="text-2xl font-bold">Hi TanStack Query!</h1>
    </div>
  )
}
