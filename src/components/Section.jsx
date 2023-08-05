import React from 'react'
import { motion } from "framer-motion"

const headingoptions = {
    initial: {
        y: "-100%",
        opacity: 0,
    },
    whileInView: {
        y: 0,
        opacity: 1,
    },
}

const textoptions = {
    ...headingoptions,
    transition: {
        delay: 0.3,
        ease: "easeIn"
    },

}
const buttonoptions = {
    initial: {
        y: " 100",
        opacity: 0,
    },
    whileInView: {
        y: 0,
        opacity: 1,
    },
   transition: {
        delay: 0.3,
        ease: "easeIn"
    },
}
const imgoptions = {
    initial: {
        scale: 0.1,
        opacity: 0,
    },
    whileInView: {
        scale: 1,
        opacity: 1,
    },
    transition: {
        delay: 0.3,
    },

}
const Section = ({ h3, text, hasbutton = true, btntext, imgsrc, imgsize = "70%", backgroundcolor
    , hedingcolor, textcolor, btnBgcolor, btncolor
}) => {
    return (
        <section className='section'
            style={{ backgroundColor: backgroundcolor }}>
            <div>
                < motion.h3
                    style={{
                        color: hedingcolor

                    }}
                    data-cursorpointer={true}
                    {...headingoptions}
                >{h3} </motion.h3>

                <motion.p
                    style={{
                        color: textcolor

                    }}
                    data-cursorpointer={true}
                    {...textoptions}
                > {text}</motion.p>


                {hasbutton && <motion.button

                    style={{
                        color: btncolor,
                        backgroundColor: btnBgcolor,


                    }}
                    data-cursorpointer={true}
                    {...buttonoptions}
                > {btntext}</motion.button>}

                <motion.div {...imgoptions}>
                    <img src={imgsrc} alt="Imgsrc" style={{ width: imgsize }} />

                </motion.div>
            </div>
        </section>
    )
}

export default Section