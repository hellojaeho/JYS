import React, {useState, useEffect} from 'react';
import Main from './components/MainComponent'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import About from './components/AboutComponent'
import Work from './components/WorkComponent'
import Capabilities from './components/CapabilitiesComponent'
import Home from './components/HomeComponent'
import Loader from './components/Loader'
import {Helmet} from 'react-helmet'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import './App.css';

function App() {

  const headerAnimation = {
    initial: {
        y: -100
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 1.6,
          duration: 2,
        }
    },
  } 
  const [show, setShow] = React.useState();


  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>

          <motion.div id="container" layoutId='main-content'>
              <Router>
              <motion.div
                 variants={headerAnimation}
                 initial="initial"
                 animate= "animate"
                 className="header-wrapper"
              >
                <Header />
              </motion.div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />}/>
                <Route path="/Work" element={<Work />} />
                <Route path="/Capabilities" element={<Capabilities />} />
              </Routes>
              {/* <Footer /> */}
            </Router>
          </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  ); 
}

export default App;
