/*eslint-disable*/
import React, { svg, button } from "react"

// Video
import { Video } from "../Video/Video.jsx"
import { Divider } from "../Dividers/Divider.jsx"
import HeaderContent from "../Headers/HeaderContent.jsx"

// const HeaderContent = React.lazy(() => import("./HeaderContent"))

function IndexHeader({ backgroundDark }) {
    const [play, pressPlay] = React.useState(false)
    const [backgroundOpacity, setBackgroundOpacity] = React.useState(0.94)
    const [groundZeroOpacity, setGroundZeroOpacity] = React.useState(1)

    const [mybackground, setMybackground] = React.useState(
        "url(" + require("../../assets/img/creative-commons-zen.jpg") + ")"
    )

    React.useLayoutEffect(() => {
        setMybackground(
            "url(" + require("../../assets/img/creative-commons-zen.jpg") + ")"
        )
    })

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
                <div
                    className="page-header section-dark"
                    style={{
                        position: "absolute",
                        backgroundImage: mybackground,
                        backgroundColor: "rgba(255,255,255,1)",
                        opacity: backgroundOpacity,
                        transition: "opacity 3s linear",
                    }}
                ></div>
                {backgroundDark && (
                    <div
                        className="rain"
                        style={{
                            backgroundImage:
                                "url(" +
                                require("../../assets/img/rain3.png") +
                                ")",
                        }}
                    />
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
