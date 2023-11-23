import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Question from './pages/Quetion';
import Fact from './pages/Fact';
import Donate from './pages/Donate';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route Path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="question" element={<Question/>}/>
    <Route path="fact" fact={<Fact/>}/>
    <Route path="donate" fact={<Donate/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
