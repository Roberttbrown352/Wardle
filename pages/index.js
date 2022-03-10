import { useState } from "react"

export default function Home() {
  const [test, setTest] = useState('test')
  return (
    <>
    <h3>{test}</h3>
    </>
  )
}
