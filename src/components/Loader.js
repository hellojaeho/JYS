import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import logo from '../images/logo.png';

const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

const textVariant = {
    initial: {
        y: 30,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 2
        }
    }
}

const loaderVariant = {
    initial: {
        y: 0
    },
    animate: {
        y: "calc(-100vh)",
        transition: {
            delay: 2
        }
    }
}

const Loader = ({ setLoading }) => {
    return (
        <motion.div 
            className="loader"
            variants={loaderVariant}
            animate="animate"
            onAnimationComplete={() => setLoading(false)}
        >
        <motion.div
            variants={textVariant}
          
          initial="initial"
          animate= "animate"
        //   exit="exit"
          className="loader-inner"
        >
            Premium product design & strategy

        </motion.div>
      </motion.div>
      
    );
  };
export default Loader;