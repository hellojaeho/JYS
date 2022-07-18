import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet'

function About(){


    return(
        
        <div id="about">
            <Helmet>
                <title>About</title>
                <meta property="og:title" content="About" />
            </Helmet>
            {/* <style>{"body{ background-color: black} h2{color: white}"}</style> */}
            <div className="content"><h2>About Content</h2></div>
        </div>

    )
}

export default About;