import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import Home from './pages/Home'
import Register from './pages/Register'
import List from './pages/List'
import Edit from "./pages/Edit";



export default function App() {
  return (
    <Router>
        <Routes>
            <Route path= "/" element= {<Home/>}/>
            <Route path= "/Register" element= {<Register/>}/>
            <Route path= "/List" element= {<List/>}/>
            <Route path= "/:id/Edit" element= {<Edit/>}/>
        </Routes>
    </Router>
  )
}
