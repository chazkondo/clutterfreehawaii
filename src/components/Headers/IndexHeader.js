/*eslint-disable*/
import React, { svg, button } from "react"

// Video
import { Video } from "../Video/Video.jsx"
import { Divider } from "../Dividers/Divider.jsx"
import HeaderContent from "../Headers/HeaderContent.jsx"
import MyBackgroundImage from "./MyBackgroundImage.jsx"

import zenBackground from "../../assets/img/creative-commons-zen.jpg"
import rainBackground from "../../assets/img/rain3.png"

// const HeaderContent = React.lazy(() => import("./HeaderContent"))

import Spinner from "react-spinkit"

function IndexHeader({ backgroundDark }) {
    const [play, pressPlay] = React.useState(false)
    const [backgroundOpacity, setBackgroundOpacity] = React.useState(0.94)
    const [groundZeroOpacity, setGroundZeroOpacity] = React.useState(1)
    const [loaded, setLoaded] = React.useState(false)

    // const [mybackground, setMybackground] = React.useState(
    //     `url(${zenBackground})`
    // )

    // React.useLayoutEffect(() => {
    //     setMybackground(`url(${zenBackground})`)
    // })

    return (
        <>
            {!loaded && (
                <div
                    style={{
                        position: "absolute",
                        height: `100%`,
                        width: `100%`,
                        display: `flex`,
                        justifyContent: `center`,
                        alignContent: `center`,
                        alignItems: `center`,
                        backgroundColor: `white`,
                        zIndex: 4,
                        opacity: 0,
                    }}
                >
                    <Spinner
                        style={
                            {
                                // transform: `scale(3)`,
                            }
                        }
                        // color="black"
                        name="cube-grid"
                    />
                </div>
            )}
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
                        // background: "white",
                        opacity: groundZeroOpacity,
                        transition: "opacity 0.5s linear",
                    }}
                />
                <MyBackgroundImage
                    backgroundOpacity={backgroundOpacity}
                    setLoaded={setLoaded}
                />
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
                        className="rain"
                        style={{
                            // position: "absolute",
                            // width: "100%",
                            // height: "100%",
                            background: `url(${rainBackground})`,
                        }}
                    ></div>
                )}
                <div className={backgroundDark ? "filter" : "filterLight"} />

                <div className="content-center">
                    {/* <React.Suspense fallback={<div></div>}> */}
                    {loaded && (
                        <HeaderContent
                            backgroundDark={backgroundDark}
                            backgroundOpacity={backgroundOpacity}
                            setBackgroundOpacity={setBackgroundOpacity}
                            setGroundZeroOpacity={setGroundZeroOpacity}
                            pressPlay={pressPlay}
                        />
                    )}
                    {/* </React.Suspense> */}
                </div>

                <Divider />
            </div>
        </>
    )
}

export default IndexHeader
