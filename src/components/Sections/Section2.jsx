import React from "react"

import { motion } from 'framer-motion'


import useIntersect from "../Helpers/useIntersect";

function Section2({ backgroundDark }) {

    const [function2WasFired, function2IsFiring] = React.useState(false)
    const [headerDetected, setHeaderDetected] = React.useState(false)

    const [headerRef, header] = useIntersect({
        threshold: 1
    });

    const [endRef, end] = useIntersect({
        threshold: 1
    });

    const variants = {
        hidden: {
            width: "0px",
        },
        faded: {
            opacity: 0,
        },
        hiddenAndFaded: {
            width: "0px",
            opacity: 0
        },
        unfaded: {
            opacity: 1,
            transition: { delay: 0, duration: 2, ease: `easeInOut` },
        },
        unfadedFaster: {
            opacity: 1,
            transition: { delay: 0, duration: 0.7, ease: `easeInOut` },
        },
        atmosphere: {
            width: "95%",
            rotate: 0,
            transition: { delay: 0, duration: 0.7, ease: `easeInOut` },
        },
        aesthetics: {
            width: "187px",
            rotate: 0,
            transition: { delay: 0.5, duration: 0.7, ease: `easeInOut` },
        },
        action: {
            width: "135px",
            rotate: 0,
            transition: { delay: 1, duration: 0.7, ease: `easeInOut` },
        },
        invisible: {
            width: "0px",
            rotate: 0,
            transition: { delay: 0, duration: 0.7, ease: `easeInOut` },
        },
        bottom: {
            position: 'relative',
            top: "100px"
        },
        top: {
            top: 0,
            transition: { delay: 0, duration: 0.6, ease: `linear` },
        },
    }

    function detectingHeader() {
        if (header.intersectionRatio === 1 || end.intersectionRatio === 1) {
            function2IsFiring(true)
            return setHeaderDetected(true)
        }
    }

    return (
        <>
            {!function2WasFired && detectingHeader()}
            <div
                style={{
                    display: 'flex', justifyItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: 'yellow'
                }}
                className={backgroundDark ? "section1Dark" : "section1"}>
                <div className={backgroundDark ? "sectionOverlayDark" : "sectionOverlay"} />
                <div style={{
                    display: 'flex', justifyItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center', textAlign: 'center',
                    height: '100%'
                }}>
                    <div className="SectionContainers">
                        <div className="SectionImages">
                            <motion.img
                                animate={headerDetected ? 'unfadedFaster' : 'faded'}
                                variants={variants}
                                style={{ width: '100%' }} src={
                                    require("../../assets/img/design6.png")} alt="" />
                        </div>
                        <div className="SectionTextContainers">
                            <div style={{
                                // backgroundColor: 'blue',
                                width: '100%', height: '100%', display: 'flex',
                                flexDirection: 'row',
                                justifyItems: 'center',
                                justifyContent: 'center',
                                // alignContent: 'center',
                                alignItems: 'center',
                            }}>
                                <span
                                    className="balanceSpan2"
                                    style={{
                                        content: ' ',
                                        // backgroundColor: 'green',
                                        width: '10%', height: '100 % ',
                                        flexDirection: 'row',
                                        justifyItems: 'center',
                                        justifyContent: 'center',
                                        // alignContent: 'center',
                                        alignItems: 'center',
                                    }}></span>
                                <div style={{
                                    content: ' ',
                                    // backgroundColor: 'red',
                                    width: '80%', height: '100 % ',
                                    flexDirection: 'row',
                                    justifyItems: 'center',
                                    justifyContent: 'center',
                                    // alignContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <motion.h3
                                        animate={headerDetected ? 'unfadedFaster' : 'faded'} variants={variants}
                                        style={{ color: backgroundDark ? 'white' : 'black', paddingBottom: 0, marginBottom: 0, fontSize: '1.7rem', letterSpacing: '4px' }}>Storage Solutions</motion.h3>
                                    <motion.h2
                                        animate={headerDetected ? 'unfadedFaster' : 'faded'} variants={variants}
                                        style={{ color: backgroundDark ? 'white' : 'black', letterSpacing: '-0.28rem', paddingTop: '1.5%', marginTop: 0, paddingBottom: '10%' }}>Design-Inspired.</motion.h2>
                                    <h5 style={{ color: backgroundDark ? 'white' : 'black' }} >At Clutter Free Hawai’i, our passion is to contribute to a unique and sustainable island community. We strive to be the innovative leader in the industries we serve, creating strong relationships with our valued clients and giving forward to the community.</h5>
                                    <div className="textUnderlineDiv" />
                                    <div
                                        className="balanceSpan1"
                                        style={{
                                            content: ' ',
                                            height: '50px',
                                        }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headerRef" ref={headerRef} />
                </div>
            </div>
            <span ref={endRef} />
        </>
    )
}

export default Section2
