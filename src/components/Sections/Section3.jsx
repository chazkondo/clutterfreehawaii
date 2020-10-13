// import React from "react"

// import { Container } from 'reactstrap'
// import { motion, useViewportScroll } from 'framer-motion'


// import useIntersect from "../Helpers/useIntersect";
// import { FadeBox, WidthBox } from "../Helpers/boxes";
// import styled from "styled-components";

// const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

// const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

// const Button = styled.button`
//   position: absolute;
//   top: 2px;
//   left: 2px;
//   border: none;
//   padding: 1rem;
//   font-size: 1rem;
// `;

// const compToRender = [WidthBox, FadeBox];

// const IntersectBox = props => {
//     const [state, toggle] = React.useState(props.initial || 0);

//     const [ref, entry] = useIntersect();

//     const Component = compToRender[state];

//     const componentName = state === 0 ? "FadeBox" : "WidthBox";

//     return (
//         <Component {...props} ref={ref} ratio={entry.intersectionRatio}>
//             intersectionRatio: {format(entry.intersectionRatio)}
//             <Button onClick={() => toggle(state === 0 ? 1 : 0)}>
//                 Switch to {componentName}
//             </Button>
//         </Component>
//     );
// };

// const buildHexArray = quantity =>
//     Array.from(Array(quantity).keys(), i =>
//         Number((i + 1) * 100)
//             .toString(16)
//             .padStart(3, "0")
//     );


// function Section3({ backgroundDark }) {

//     const [bottomRef, bottom] = useIntersect({
//         threshold: 1
//     });

//     const [headerRef, header] = useIntersect({
//         threshold: 1
//     });

//     const [endRef, end] = useIntersect({
//         threshold: 1
//     });

//     const variants = {
//         hidden: {
//             width: "0px",
//         },
//         faded: {
//             opacity: 0,
//         },
//         hiddenAndFaded: {
//             width: "0px",
//             opacity: 0
//         },
//         unfaded: {
//             opacity: 1,
//             transition: { delay: 0, duration: 2, ease: `easeInOut` },
//         },
//         unfadedFaster: {
//             opacity: 1,
//             transition: { delay: 0, duration: 0.7, ease: `easeInOut` },
//         },
//         atmosphere: {
//             width: "95%",
//             rotate: 0,
//             transition: { delay: 0, duration: 0.7, ease: `easeInOut` },
//         },
//         aesthetics: {
//             width: "187px",
//             rotate: 0,
//             transition: { delay: 0.5, duration: 0.7, ease: `easeInOut` },
//         },
//         action: {
//             width: "135px",
//             rotate: 0,
//             transition: { delay: 1, duration: 0.7, ease: `easeInOut` },
//         },
//         invisible: {
//             width: "0px",
//             rotate: 0,
//             transition: { delay: 0, duration: 0.7, ease: `easeInOut` },
//         },
//         bottom: {
//             position: 'relative',
//             top: "100px"
//         },
//         top: {
//             top: 0,
//             transition: { delay: 0, duration: 0.6, ease: `linear` },
//         },
//     }

//     function detectWhere() {
//         console.log('THIS IS GETTING HIT')
//         if (entry.intersectionRatio === 1 && exit.intersectionRatio === 1) {
//             return true
//         } else {
//             return false
//         }
//     }

//     function headerDetected() {
//         console.log('THIS IS GETTING HIT1')
//         if (header.intersectionRatio === 1 || end.intersectionRatio === 1) {
//             return true
//         }
//     }


//     function bottomDetected() {
//         console.log('THIS IS GETTING HIT4')
//         if (bottom.intersectionRatio === 1) {
//             // setBorderVisible(true)
//         } else {
//             // setBorderVisible(false)
//         }
//     }

//     return (
//         <>
//             {bottomDetected()}
//             <div
//                 className={backgroundDark ? "section1Dark" : "section1"}
//                 style={{
//                     // width: '100%',
//                     height: '70vh',
//                 }}>
//                 <div className={backgroundDark ? "sectionOverlayDark" : "sectionOverlay"} />
//                 <div style={{ textAlign: 'center', paddingTop: '0%', marginTop: '0%', }}>
//                     <div
//                         style={{
//                             display: 'flex',
//                             flexDirection: 'row',
//                             flexWrap: 'wrap',
//                             justifyItems: 'center',
//                             justifyContent: 'center',
//                             alignContent: 'center',
//                             paddingTop: '0%',
//                             paddingLeft: '2%',
//                             paddingRight: '2%',
//                         }}>
//                         <div style={{ textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column', padding: '4%', paddingLeft: '10%', paddingTop: 0 }}>
//                             <motion.h3 animate={headerDetected() ? 'unfadedFaster' : 'faded'}
//                                 variants={variants} ref={headerRef} style={{ color: backgroundDark ? 'white' : 'black', paddingBottom: 0, marginBottom: 0, fontSize: '1.7rem', letterSpacing: '4px' }}>Clutter Removal</motion.h3>
//                             <motion.h2 animate={headerDetected() ? 'unfadedFaster' : 'faded'}
//                                 variants={variants} style={{ color: backgroundDark ? 'white' : 'black', letterSpacing: '-0.28rem', paddingTop: '0%', marginTop: 0, paddingBottom: '10%' }}>Purpose-Driven.</motion.h2>
//                             <h5 style={{ color: backgroundDark ? 'white' : 'black' }}>At Clutter Free Hawai’i, our passion is to contribute to a unique and sustainable island community. We strive to be the innovative leader in the industries we serve, creating strong relationships with our valued clients and giving forward to the community.</h5>
//                         </div>
//                         <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignContent: 'center', paddingLeft: 0, }}>
//                             <motion.img
//                                 animate={headerDetected() ? 'unfadedFaster' : 'faded'}
//                                 variants={variants}
//                                 style={{ width: '75%' }} src={
//                                     require("../../assets/img/clutterfree.png")} alt="" />
//                         </div>
//                     </div>
//                     <span style={{ position: 'absolute', top: '45%' }} ref={bottomRef} />
//                 </div>
//             </div>
//             <span ref={endRef} />
//         </>
//     )
// }

// export default Section3


import React from "react"

import { motion } from 'framer-motion'


import useIntersect from "../Helpers/useIntersect";

function Section3({ backgroundDark }) {

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
        lessFaded: {
            opacity: 0.12,
            y: 0,
            transition: { delay: 0, duration: 0.7, ease: `easeInOut` },
        },
        lessFaded2: {
            opacity: 0.1,
            y: 0,
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


    return (
        <>
            {!function2WasFired && detectingHeader()}
            <div
                style={{
                    display: 'flex', justifyItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
                className={backgroundDark ? "section1Dark" : "section1"}>
                {/* <span style={{ position: 'absolute', top: '0px', left: '0%', width: '100%', height: '7.5px', background: 'rgba(0,0,0, 0.02)' }} /> */}
                <motion.svg
                    variants={variants}
                    initial="faded"
                    animate={"lessFaded"}
                    className="section2Divider"
                    style={{ zIndex: backgroundDark ? '0' : '-2' }} width="100%" height="640pt" version="1.0" viewBox="0 0 1280 640" xmlns="http://www.w3.org/2000/svg">
                    <g
                        fill={backgroundDark ? "white" : "green"} transform="translate(0 640) scale(.1 -.1)">
                        <path d="m323 3303c-18-6-16-48 2-84 9-16 34-43 57-59 42-31 115-56 126-45 10 10-46 109-82 144-32 31-80 52-103 44z" />
                        {/* <path d="m12436 3299c-41-11-99-71-126-130-13-27-21-51-18-54 10-10 108 26 138 51 36 31 60 73 60 107 0 30-15 37-54 26z" /> */}
                        <path d="m5040 3164c0-29 9-45 55-93 58-61 67-84 38-99-23-12-42-5-73 24-57 52-120 36-215-55-42-40-53-56-44-62 8-4 43-31 79-59 59-48 67-52 106-47 26 2 60 17 87 37 87 62 117 16 38-58-49-46-51-50-51-100 0-29 3-52 7-52s28 21 54 46c39 39 56 48 100 55 85 13 124 71 84 123-33 44-12 58 44 30 40-20 85-7 127 37 33 35 28 51-27 81-40 22-80 18-121-12-15-11-32-20-38-20-15 0-12 36 5 50 21 18 19 66-5 90-13 13-33 20-61 20-52 0-96 21-139 65-19 19-38 35-42 35s-8-16-8-36z" />
                        {/* <path d="m7723 3181c-26-41-79-71-143-79-69-10-90-27-90-73 0-14 7-32 15-39 17-14 20-50 5-50-6 0-23 9-38 20-41 30-81 34-121 12-55-30-60-46-27-81 42-44 87-57 127-37 56 28 77 14 44-30-40-52-1-110 84-123 44-7 61-16 100-55 26-25 50-46 54-46s7 23 7 52c0 50-2 54-51 100-83 78-50 118 44 54 76-52 109-50 189 15 35 28 69 54 77 59 11 6 2 20-40 60-93 89-170 109-215 58-25-27-55-38-76-26-30 15-21 38 37 99 46 48 55 64 55 93 0 40-18 48-37 17z" /> */}
                        <path d="m73 3119c-35-10-73-52-73-79 0-10 14-30 31-44 50-42 128-34 262 26 37 17 67 34 67 39 0 10-103 48-164 60-58 11-80 10-123-2z" />
                        {/* <path d="m12585 3116c-70-16-145-45-145-56 0-4 30-21 68-38 133-60 211-68 261-26 39 32 39 62 3 97-36 34-102 42-187 23z" /> */}
                        <path d="m459 3020c-74-39-132-137-108-182 12-22 37-17 81 14 29 20 74 103 84 156 8 38-3 40-57 12z" />
                        <path d="m1407 3009c-110-48-210-70-317-70-52-1-110 4-129 10-40 12-50 7-35-16 27-43 64-58 150-62 58-2 84-7 81-15-2-6-46-29-98-51-77-32-104-50-151-98-32-33-58-64-58-69 0-6 32-9 83-7l82 4 97 68c124 86 150 89 87 11-57-71-74-140-45-180 14-19 15-19 21 1 35 103 106 188 313 376 68 61 83 80 80 100-5 37-73 36-161-2z" />
                        {/* <path d="m11234 3026c-10-25 24-72 98-136 167-145 253-245 281-324 15-44 29-49 41-15 14 41-1 93-44 151-69 91-52 91 78 1l97-68 82-4c51-2 83 1 83 7 0 5-26 36-57 69-48 48-75 66-152 98-52 22-96 45-98 51-3 8 23 13 81 15 86 4 123 19 150 62 15 23 5 28-35 16-52-16-205-13-284 5-38 9-108 32-156 51-91 37-156 45-165 21z" /> */}
                        {/* <path d="m12284 3008c10-53 55-136 84-156 44-31 69-36 81-14 25 46-35 144-110 183-54 27-63 25-55-13z" /> */}
                        <path d="m4288 2993c6-2 18-2 25 0 6 3 1 5-13 5s-19-2-12-5z" />
                        <path d="m3510 2828c-29-24-73-60-98-81-97-79-225-137-330-152-59-8-65-18-22-40 40-21 99-19 165 6 31 12 59 18 63 14s-30-41-75-84c-82-76-126-142-139-210l-6-31 39 14c92 32 120 54 182 139 86 120 115 140 87 59-26-72-29-124-9-161 25-48 43-51 43-7 0 95 32 181 140 377 51 91 70 135 70 162 0 34-2 37-29 37-20 0-46-14-81-42z" />
                        {/* <path d="m9174 2845c-4-18 7-48 45-117 125-225 171-341 171-431 0-47 17-46 43 4 20 38 16 95-10 162-9 21-13 41-9 44 10 10 37-19 93-99 62-88 84-106 167-137l59-22-6 30c-14 69-52 128-136 208-47 45-82 85-79 88 4 4 34-2 67-14 72-25 121-27 161-6 43 22 37 32-22 40-114 16-244 78-350 168s-131 107-160 107c-21 0-29-6-34-25z" /> */}
                        <path d="m2022 2737c-30-17-48-45-56-89-10-55-46-46-46 11 0 25-32 51-62 51-14 0-42-13-62-29-50-40-99-55-153-47-38 5-44 3-41-11 7-35 52-55 123-54 72 0 95-9 95-40 0-23-29-39-73-39-36 0-79-27-98-61-6-11-12-62-15-114l-4-93 37 9c21 5 58 9 81 9 24 0 59 7 77 16 36 17 50 43 64 117 11 59 24 76 49 60 14-9 16-23 14-72-3-63 6-90 41-128 37-41 47-30 47 51 0 65 3 78 25 104 62 74 45 152-34 152-39 0-25 36 19 49 48 14 70 50 70 116v45h-37c-21-1-48-6-61-13z" />
                        {/* <path d="m10680 2705c0-66 22-102 70-116 44-13 58-49 19-49-79 0-96-78-34-152 22-26 25-39 25-104 0-81 10-92 47-51 35 38 44 65 41 128-2 50 0 63 15 73 25 15 43-10 51-76 6-39 15-59 41-85 29-29 39-33 87-33 29 0 70-4 90-9l36-9-3 77c-2 42-4 87-4 99-1 13-16 39-35 58-26 26-42 34-71 34-46 0-75 15-75 39 0 31 23 40 95 40 71-1 116 19 123 54 3 14-3 16-41 11-54-8-103 7-153 47-20 16-49 29-64 29-29 0-60-27-60-52 0-50-34-65-44-20-19 81-52 112-121 112-35 0-35 0-35-45z" /> */}
                        <path d="m4482 2651c-59-23-110-66-129-106-20-41-12-65 22-65 65 0 141 74 169 168 9 27-2 28-62 3z" />
                        <path d="m4624 2644c14-57 59-118 106-142 56-28 84-26 88 8 6 54-86 140-167 156-33 7-34 7-27-22z" />
                        {/* <path d="m8091 2639c-72-36-114-85-109-126 4-37 30-40 88-11 46 24 92 85 106 141 8 36-6 35-85-4z" /> */}
                        {/* <path d="m8260 2650c0-69 97-170 165-170 75 0 8 125-89 165-67 27-76 28-76 5z" /> */}
                        <path d="m4552 2459c-60-129-66-239-15-279 32-25 53-25 86 0 51 40 44 165-17 294l-24 51-30-66z" />
                        {/* <path d="m8186 2457c-54-120-57-239-9-277 33-26 56-25 88 3 35 29 42 85 21 166-19 76-55 161-68 161-5 0-20-24-32-53z" /> */}
                    </g>
                </motion.svg>
                <div className={backgroundDark ? "sectionOverlayDark" : "sectionOverlay"} />
                <div style={{
                    display: 'flex', justifyItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center', textAlign: 'center',
                    height: '100%'
                }}>
                    <div className="SectionContainers ReverseSection">
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
                                <div style={{
                                    content: ' ',
                                    width: '80%', height: '100 % ',
                                    flexDirection: 'row',
                                    justifyItems: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <motion.h3
                                        animate={headerDetected ? 'unfadedFaster' : 'faded'} variants={variants}
                                        style={{ color: backgroundDark ? 'white' : 'black', paddingBottom: 0, marginBottom: 0, fontSize: '1.7rem', letterSpacing: '4px' }}>Clutter Removal</motion.h3>
                                    <motion.h2
                                        ref={headerRef}
                                        animate={headerDetected ? 'unfadedFaster' : 'faded'} variants={variants}
                                        style={{ color: backgroundDark ? 'white' : 'black', letterSpacing: '-0.28rem', paddingTop: '1.5%', marginTop: 0, paddingBottom: '10%' }}>Purpose-Driven.</motion.h2>
                                    <h5 style={{ color: backgroundDark ? 'white' : 'black' }} >At Clutter Free Hawai’i, our passion is to contribute to a unique and sustainable island community. We strive to be the innovative leader in the industries we serve, creating strong relationships with our valued clients and giving forward to the community.</h5>
                                    <div className="textUnderlineDiv" />
                                </div>
                                <span
                                    className="balanceSpan2"
                                    style={{
                                        content: ' ',
                                        backgroundColor: 'green',
                                        width: '10%', height: '100 % ',
                                        flexDirection: 'row',
                                        justifyItems: 'center',
                                        justifyContent: 'center',
                                        // alignContent: 'center',
                                        alignItems: 'center',
                                    }} />
                            </div>
                        </div>
                        <div className="SectionImages">
                            <motion.img
                                animate={headerDetected ? 'unfadedFaster' : 'faded'}
                                variants={variants}
                                style={{ width: '100%', }} src={
                                    require("../../assets/img/clutterfree.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <span ref={endRef} />
        </>
    )
}

export default Section3
