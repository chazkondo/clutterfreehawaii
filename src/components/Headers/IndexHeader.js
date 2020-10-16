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

function IndexHeader({ backgroundDark }) {
    const [play, pressPlay] = React.useState(false)
    const [backgroundOpacity, setBackgroundOpacity] = React.useState(0.94)
    const [groundZeroOpacity, setGroundZeroOpacity] = React.useState(1)

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
                        // background: "white",
                        opacity: groundZeroOpacity,
                        transition: "opacity 0.5s linear",
                    }}
                />
                <MyBackgroundImage backgroundOpacity={backgroundOpacity} />
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
