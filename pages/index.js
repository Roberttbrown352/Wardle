import { useState } from "react"

import Banner from "../components/Banner"

export default function Home() {
  const [test, setTest] = useState('test')
  return (
    <>
    <Banner />
    <h3>{test}</h3>
    </>
  )
}
