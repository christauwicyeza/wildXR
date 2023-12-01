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
import Login from './pages/Login';
import Signup from './pages/signUp';
import Create from "./pages/Create"
import QuizPage from './pages/quiz';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route Path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="question" element={<Question/>}/>
    <Route path="fact" element={<Fact/>}/>
    <Route path="donate" element={<Donate/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<Signup/>}/>
<Route path="create" element={<Create/>}/>
<Route path="education/edit/:id" element={<Create/>}/>
    <Route path="quiz" element={<QuizPage/>}/>
      </Route>
     </Routes>
     <ToastContainer />
     </BrowserRouter>
    </>
  )
}

export default App
