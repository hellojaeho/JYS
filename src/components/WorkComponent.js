import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet'

function Work(){
    // useEffect(() => {
    //     document.title = "Work";  
    //   }, []);
    return(
        <div>
            <Helmet>
                <title>Work</title>
                <meta property="og:title" content="Work" />
            </Helmet>
            Work Content</div>
    )
}

export default Work;