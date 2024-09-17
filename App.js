import React from "react"
import data from "./data/data"
import Header from "./components/Header"
import Card from "./components/Card"

export default function App() {
  const dataToRender = data.map(data => 
    <Card 
      key = {data.id}
      feed = {data}
    />
  )

  return (
    <div>
      <Header />
      <main>
        {dataToRender}
      </main>
    </div>
  )
}