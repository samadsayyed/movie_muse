//importing packages
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

//importing pages
import Home from './Pages/Home'
import ShowDetails from './Pages/ShowDetails'

//importing components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import ContactUs from './Pages/Contact'

//importing styles
import "./Styles/nav.css"
import "./Styles/home.css"
import "./Styles/showDetails.css"

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shows/:id' element={<ShowDetails/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App