import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import { Routes, Route } from "react-router-dom"


const url = "https://cat-tinder-back.onrender.com"

const App = () => {
  const [cats, setCats] = useState([])
  useEffect(() => {
    catShow()
  }, [])

  const catShow = () => {
    fetch(`${url}/catindex`)
      .then((response) => response.json())
      .then((payload) => {
        setCats(payload)
      })
      .catch((error) => console.log(error))
  }

  const catNew = (createCat) => {
    fetch(`${url}/catnew`, {
      body: JSON.stringify(createCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => catShow())
      .catch((errors) => console.log("Cat create errors:", errors))
  }

  const updateCat = (cat, id) => {
    fetch(`${url}/catedit/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => catShow())
      .catch((errors) => console.log("Cat update errors:", errors))
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={catNew} />} />
        <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
