import { useEffect, useRef, useState } from 'react'

import './App.css'
import { getData } from './api'
import { Sidebar } from './components/Sidebar'
import { Dashboard } from './components/Dashboard'
import { Button, Flex, Text } from '@radix-ui/themes/dist/cjs/index.js'
import { Nav } from './components/Nav'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const topic = async () => {
      try {
        const response = await getData()

        setData(response.data.data)

      } catch (error) {
        console.log(error)
      }
    }
    topic()
  }, [])
  return (
    <>
      <Nav />
      <Dashboard data={data} setData={setData} />

    </>
  )
}

export default App
