/*eslint-disable*/
import React, { svg, button } from "react"

// Video
import { Video } from "../Video/Video.jsx"
import { Divider } from "../Dividers/Divider.jsx"
import HeaderContent from "../Headers/HeaderContent.jsx"
import MyBackgroundImage from "./MyBackgroundImage.jsx"

// import zenBackground from "../../assets/img/creative-commons-zen.jpg"
import rainBackground from "../../assets/img/rain3.png"

// const HeaderContent = React.lazy(() => import("./HeaderContent"))

import Spinner from "react-spinkit"
import Loading from "../../components/Loading/Loading.jsx"

function IndexHeader({ backgroundDark, size }) {
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
            <Loading loaded={loaded} backgroundDark={backgroundDark} />
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    zIndex: -2,
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
                {!loaded && (
                    <div style={{ position: "absolute", zIndex: 4 }}>
                        <Spinner
                            className="loadingAnimation"
                            color="white"
                            name="cube-grid"
                        />
                    </div>
                )}
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
                    <HeaderContent
                        size={size}
                        loaded={loaded}
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
