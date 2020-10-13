/*eslint-disable*/
import React, { svg, button } from "react"

// Video
import { Video } from "../Video/Video.jsx"
import { Divider } from "../Dividers/Divider.jsx"
import HeaderContent from "../Headers/HeaderContent.jsx"

// import zenBackground from "../../assets/img/creative-commons-zen.jpg"
import rainBackground from "../../assets/img/rain3.png"

// import BackgroundImage from "gatsby-background-image"
// const HeaderContent = React.lazy(() => import("./HeaderContent"))

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

function IndexHeader({ backgroundDark }) {
    const [play, pressPlay] = React.useState(false)
    const [backgroundOpacity, setBackgroundOpacity] = React.useState(0.94)
    const [groundZeroOpacity, setGroundZeroOpacity] = React.useState(1)

    const data = useStaticQuery(
        graphql`
            query {
                static: file(relativePath: { eq: "creative-commons-zen.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                static2: file(relativePath: { eq: "rain3.png" }) {
                    childImageSharp {
                        fixed(quality: 100) {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                }
            }
        `
    )

    const imageData = data.static.childImageSharp.fluid
    const imageData2 = data.static2.childImageSharp.fixed

    // const [mybackground, setMybackground] = React.useState(
    //     `url(${zenBackground})`
    // )

    // React.useLayoutEffect(() => {
    //     setMybackground(`url(${zenBackground})`)
    // })

    return (
        <>
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    zIndex: 3,
                }}
            />
            <div
                className="page-header section-dark"
                style={{ background: "rgba(255, 255, 255, 1)" }}
            >
                {/* <Video play={play} /> */}
                <div
                    className="page-header"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        background: "white",
                        opacity: groundZeroOpacity,
                        transition: "opacity 0.5s linear",
                    }}
                />
                <BackgroundImage
                    Tag="section"
                    className="page-header section-dark"
                    style={{
                        position: "absolute",
                        backgroundColor: "rgba(255,255,255,1)",
                        opacity: backgroundOpacity,
                        transition: "opacity 3s linear",
                    }}
                    fluid={imageData}
                ></BackgroundImage>
                {/* <div
                                className="page-header section-dark"
                                style={{
                                    position: "absolute",
                                    backgroundImage: mybackground,
                                    backgroundColor: "rgba(255,255,255,1)",
                                    opacity: backgroundOpacity,
                                    transition: "opacity 3s linear",
                                }}
                            ></div> */}
                {backgroundDark && (
                    <div
                        // Tag="section"
                        className="rain"
                        style={{
                            // position: "absolute",
                            // width: "100%",
                            // height: "100%",
                            background: `url(${rainBackground})`,
                        }}
                        fixed={imageData2}
                    ></div>
                )}
                <div className={backgroundDark ? "filter" : "filterLight"} />
                <div className="content-center">
                    {/* <React.Suspense fallback={<div></div>}> */}
                    <HeaderContent
                        backgroundDark={backgroundDark}
                        backgroundOpacity={backgroundOpacity}
                        setBackgroundOpacity={setBackgroundOpacity}
                        setGroundZeroOpacity={setGroundZeroOpacity}
                        pressPlay={pressPlay}
                    />
                    {/* </React.Suspense> */}
                </div>
                <Divider />
            </div>
        </>
    )
}

export default IndexHeader
