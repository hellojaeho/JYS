import React from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import About from './AboutComponent'
import Work from './WorkComponent'
import Home from './HomeComponent'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Main (){
    return(
        <React.Fragment>
            <Header/>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/work' element={<Work />}/>
                        <Route path='/about' element={<About />}/>
                    </Routes>
                </Router>
            <Footer/>
        </React.Fragment>
    );
}

export default Main;