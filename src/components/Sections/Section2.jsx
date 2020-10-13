import React from "react"

import { motion } from 'framer-motion'


import useIntersect from "../Helpers/useIntersect";

function Section2({ setBorderVisible, backgroundDark }) {

    const [functionWasFired, functionIsFiring] = React.useState(false)
    const [function2WasFired, function2IsFiring] = React.useState(false)
    const [headerDetected, setHeaderDetected] = React.useState(false)

    const [bottomRef, bottom] = useIntersect({
        threshold: 1
    });

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
        console.log('THIS IS GETTING HIT1')
        if (header.intersectionRatio === 1 || end.intersectionRatio === 1) {
            function2IsFiring(true)
            return setHeaderDetected(true)
        }
    }


    function bottomDetected() {
        if (bottom.intersectionRatio === 1) {
            functionIsFiring(true)
            return setBorderVisible(true)
        }
    }

    return (
        <>
            {!functionWasFired && bottomDetected()}
            {!function2WasFired && detectingHeader()}
            <div
                style={{
                    display: 'flex', justifyItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
                className={backgroundDark ? "section1Dark" : "section1"}>
                <div className={backgroundDark ? "sectionOverlayDark" : "sectionOverlay"} />
                <div style={{
                    display: 'flex', justifyItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center', textAlign: 'center',
                }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '90%',
                        }}>
                        <div style={{
                            width: '100%', height: '100%', display: 'flex',
                            flexDirection: 'column',
                            justifyItems: 'center',
                            justifyContent: 'center',
                            // alignContent: 'center',
                            alignItems: 'center',
                            // backgroundColor: 'purple'
                        }}>
                            <motion.img
                                animate={headerDetected ? 'unfadedFaster' : 'faded'}
                                variants={variants}
                                style={{ width: '100%' }} src={
                                    require("../../assets/img/design6.png")} alt="" />
                        </div>
                        <div style={{
                            // backgroundColor: 'pink',
                            textAlign: 'left', width: '100%', height: '100%', display: 'flex',
                            flexDirection: 'column',
                            justifyItems: 'center',
                            justifyContent: 'center',
                            // alignContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                // backgroundColor: 'blue',
                                width: '100%', height: '100%', display: 'flex',
                                flexDirection: 'row',
                                justifyItems: 'center',
                                justifyContent: 'center',
                                // alignContent: 'center',
                                alignItems: 'center',
                            }}>
                                <span style={{
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
                                        ref={headerRef}
                                        animate={headerDetected ? 'unfadedFaster' : 'faded'} variants={variants}
                                        style={{ color: backgroundDark ? 'white' : 'black', letterSpacing: '-0.28rem', paddingTop: '1.5%', marginTop: 0, paddingBottom: '10%' }}>Design-Inspired.</motion.h2>
                                    <h5 style={{ color: backgroundDark ? 'white' : 'black' }} >At Clutter Free Hawai’i, our passion is to contribute to a unique and sustainable island community. We strive to be the innovative leader in the industries we serve, creating strong relationships with our valued clients and giving forward to the community.</h5>
                                    <div style={{ content: '', marginTop: '10%', width: '85%', height: '3px', background: 'rgba(221, 238, 211, 0.6)' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <span style={{ position: 'absolute', top: '0%' }} ref={bottomRef} />
                </div>
            </div>
            <span ref={endRef} />
        </>
    )
}

export default Section2
