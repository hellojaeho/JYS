import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {Helmet} from 'react-helmet'
import backgroundVideo from '../videos/jys_hero_compressed.mp4'
import { motion } from "framer-motion"
import biglogo from '../images/big_logo.png'

export function Home(props){

    const textVariant = {
        initial: {
            y: 138,
            opacity: 0,
        },
        animate: {
            y: 40,
            opacity: 1,
        },
        exit: {
            opacity: 0,
            y: -500,
            transition: {
                duration: 1,
            }
        }
    }
    
    const loaderVariant = {
        initial: {
            y: 0,
        },
        animate: {
            y: "calc(-100vh)",
            transition: {
                delay: 2.8,

            }
        }
    }

    let navigate = useNavigate();
    
    return(
        <motion.div id="home">
            <Helmet>
                <title>Home</title>
                <meta property="og:title" content="Home" />
            </Helmet>
            <motion.div 
                    className="loader"
                    variants={loaderVariant}
                    animate="animate"
                    initial="initial"
                >
                <div className="fixed">
                <motion.div
                    variants={textVariant}
                    initial="initial"
                    animate= "animate"
                      exit="exit"
                    className="loader-inner"
                    >
                    <img src={biglogo} alt="logo"></img>

                </motion.div>
                </div>
            </motion.div>
            <video className='videoTag' autoPlay loop muted>
                <source src={backgroundVideo} type='video/mp4' />
            </video>
            {/* <div id="home-about">
                <div className="home-container">
                    <div className="about-me">
                        <h2>About Me</h2>
                        <p>
                        I had the fortune to learn from incredibly talented people inside various organizations, processes and design philosophies.
                        </p>
                        <p>
                        After many years of absorbing different perspectives and honing in on my craft, I found myself getting hired to provide consultative services on a freelance basis for some of the world’s best design agencies and companies, as well as provide hands-on execution of end-to-end design.
                        </p>
                        <p>
                        After completing many successful freelance projects, I set up my own independent studio to provide services directly to my own clients.
                        </p>
                    </div>
                    <div className="services">
                        <h2>Services</h2>
                        <ul>
                            <li><span>Strategy</span></li>
                            <li>Consumer &#38; market research</li>
                            <li>Content strategy</li>
                            <li>Current state diagnosis</li>
                            <li>Digital ecosystem strategy</li>
                            <li>General roadmapping</li>
                            <li>MVP feature set prioritization</li>
                            <li>User journey / stories</li>
                            <li>User research</li>
                            <li>Value proposition creation</li>
                        </ul>
                        <ul>
                            <li><span>Design</span></li>
                            <li>Art direction</li>
                            <li>Design system</li>
                            <li>E-commerce</li>
                            <li>Information architecture</li>
                            <li>User interface design</li>
                            <li>User experience design</li>
                            <li>Mobile app design</li>
                            <li>Motion design</li>
                            <li>Product concepting</li>
                            <li>Rapid prototyping</li>
                        </ul>
                    </div>
                    <div className="previous-engagements">
                        <h2>Previous Engagements</h2>
                        <ul>
                            <li><span>Industry leaders</span></li>
                            <li>Apple</li>
                            <li>Coinbase</li>
                            <li>Google</li>
                            <li>Hyundai</li>
                            <li>Marriott Hotels</li>
                            <li>Nike</li>
                            <li>Shoprite</li>
                            <li>W Hotels</li>
                            <li>Twitter</li>
                            <li>Wish</li>
                        </ul>
                        <ul>
                            <li><span>Startups</span></li>
                            <li>Betterment</li>
                            <li>Corral Data</li>
                            <li>Current</li>
                            <li>Deno</li>
                            <li>Formulyst</li>
                            <li>InHouse</li>
                        </ul>
                        <ul>
                            <li><span>Agencies</span></li>
                            <li>BBH</li>
                            <li>Domani Studios</li>
                            <li>Fantasy Interactive</li>
                            <li>Huge</li>
                            <li>Stink Studios</li>
                            <li>Ueno</li>
                            <li>Ustwo</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <ul>
                            <li><a href="mailto:info@jaeyoon.studio">info@jaeyoon.studio</a></li>
                            <li><a href="https://www.linkedin.com/in/hellojaeho/">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
            
        </motion.div>
    );
}

export default Home;