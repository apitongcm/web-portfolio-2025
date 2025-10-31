import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AppLoader from './pages/AppLoader';


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AppLoader/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
