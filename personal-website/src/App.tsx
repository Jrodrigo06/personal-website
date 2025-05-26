// import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound"
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";

function App() {

  return (
    <>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element = {<Home />}/> 
        <Route path="*" element = {<NotFound />} />
        <Route path="/about" element = {<About />} />
        <Route path="/projects" element = {<Projects />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
