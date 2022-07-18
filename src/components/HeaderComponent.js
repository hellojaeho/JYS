import React, { useRef } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import logo from '../images/logo.png'
import close from '../images/close.png'
import emailjs from '@emailjs/browser'


function Header(){


    const [show, setShow] = React.useState();
    const [Contactshow, setContactShow] = React.useState();
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_blfhcju", "template_x64d0y4", form.current, "lonraSqGkmaxqkV0K")
      .then((result) => {
          console.log(result.text);
          console.log("msg sent")
      }, (error) => {
          console.log(error.text);
          console.log("error")
      });
    }

    return(
        <div className="whole-container">
            <nav>
                <div className="container">
                    <img src={logo} alt="logo" className={show ? "show" : ""}></img>
                    {/* <ul>
                        <li><Link to="/work" data-link-alt="Work"><span> Work</span> </Link></li>
                        <li><Link to="/capabilities" data-link-alt="Services"> <span>Services</span> </Link></li>
                        <li className="toggle" onClick={() => setShow(!show)}><Link to="" data-link-alt="About"><span> About</span></Link></li>
                    </ul> */}
                    <div class="right-menu">
                        <ul>
                        <li className="toggle" onClick={() => setShow(!show)}><Link to="" data-link-alt="Info"><span>Info</span></Link></li>
                        </ul>
                        <button><ul><li className="toggle" onClick={() => setContactShow(!Contactshow)}><a data-link-alt="Submit Inquiry"><span>Submit Inquiry</span></a></li></ul></button>
                    </div>
                </div>
            </nav>
            <div id="overlay" className={show ? "show" : ""} ></div>
            <div id="overlay" className={Contactshow ? "show" : ""} ></div>
            <div id="home-about" className={show ? "show" : ""}>
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
                        <h2>Contact</h2>
                        <ul>
                            <li><a href="mailto:info@jaeyoon.studio">info@jaeyoon.studio</a></li>
                            <li><a href="https://www.linkedin.com/in/hellojaeho/">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div onClick={() => setShow(!show)} className="about-close">
                        <img src={close} alt="close"></img>
                    </div>
                </div>
            </div> 
            <div id="home-contact" className={Contactshow ? "show" : ""}>
                <h2>Let's make something incredible</h2>
                <p>info@jaeyoon.studio</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name*</label>
                    <input type="text" name="user_name" />
                    <label>Email*</label>
                    <input type="email" name="user_email" />
                    <label>Budget*</label>
                    <div className="dropdown">
                        <select name="budget" id="cars">
                            <option value="">$20,000 - $50,000</option>
                            <option value="saab">$50,000 - $100,000</option>
                            <option value="mercedes">$100,000 - $150,000</option>
                            <option value="audi">$150,000+</option>
                        </select>
                    </div>
                    <label>Message*</label>
                    <textarea name="message" />
                    <input class="form-button" type="submit" value="Submit" />
                </form>
                <div onClick={() => setContactShow(!Contactshow)} className="contact-close">
                    <img src={close} alt="close"></img>
                </div>
            </div>
            
        </div>
    )
}

export default Header;