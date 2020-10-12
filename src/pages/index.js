import React from "react"

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js"
import IndexHeader from "../components/Headers/IndexHeader.js"
import Footer from "../components/Footers/Footer.js"
import Section1 from "../components/Sections/Section1"
import Section2 from "../components/Sections/Section2"
import Section3 from "../components/Sections/Section3"
import Section4 from "../components/Sections/Section4"
import Section5 from "../components/Sections/Section5"

//css
import "../assets/css/bootstrap.min.css"
import "../assets/scss/paper-kit.scss?v=1.2.0"
import "../assets/demo/demo.css?v=1.2.0"

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

import classnames from "classnames"

function Index() {
    const hours = new Date().getHours()
    const isDayTime = hours > 6 && hours < 18
    if (isDayTime === undefined) {
        isDayTime = false
    }

    const [borderVisible, setBorderVisible] = React.useState(false)
    const [backgroundDark, setBackgroundDark] = React.useState(!isDayTime)
    const [nightModeClicked, setNightModeClicked] = React.useState(false)
    const [jumpEffect, toggleJumpEffect] = React.useState(``)

    function toggleMode() {
        if (!nightModeClicked) {
            setNightModeClicked(true)
        }
        return setBackgroundDark(current => !current)
    }

    React.useEffect(() => {
        let initialTimeout
        let setJumpInterval
        function turnOnJumpEffect() {
            toggleJumpEffect(`jump`)
            return (initialTimeout = setTimeout(
                () => toggleJumpEffect(``),
                3000
            ))
        }
        if (!nightModeClicked) {
            turnOnJumpEffect()
        }
        if (nightModeClicked) {
            clearTimeout(initialTimeout)
            return clearTimeout(setJumpInterval)
        }
        return () => {
            clearTimeout(initialTimeout)
            clearTimeout(setJumpInterval)
        }
    }, [nightModeClicked])

    return (
        <>
            <IndexNavbar
                showProgressBar={true}
                backgroundDark={backgroundDark}
            />
            <IndexHeader backgroundDark={backgroundDark} />
            <div className="main">
                <Section1
                    backgroundDark={backgroundDark}
                    borderVisible={borderVisible}
                />
                <Section2
                    backgroundDark={backgroundDark}
                    setBorderVisible={setBorderVisible}
                />
                <Section3 backgroundDark={backgroundDark} />
                <Section4 backgroundDark={backgroundDark} />
                {/* <Section5 backgroundDark={backgroundDark} /> */}
                <span
                    onClick={() => toggleMode()}
                    style={{
                        cursor: `pointer`,
                        bottom: `10%`,
                        right: `3%`,
                        position: `fixed`,
                        zIndex: 100000,
                        color: `rgba(255,255,255,0.3)`,
                        // background: `black`,
                    }}
                >
                    {backgroundDark ? (
                        <span
                            className={classnames(jumpEffect)}
                            style={{
                                display: `grid`,
                                gridTemplateColumns: `1fr`,
                                gridTemplateRows: `1fr`,
                                gridTemplateAreas: `'overlap'`,
                                margin: 0,
                                gridGap: 0,
                                padding: 0,
                            }}
                        >
                            <FontAwesomeIcon
                                className="overlap"
                                style={{
                                    filter: `drop-shadow(1px 1px 1px #000000)`,
                                    transform: `rotate(-10deg)`,
                                }}
                                size={`lg`}
                                icon={[`fas`, `sun`]}
                                color="black"
                                opacity={0.5}
                            />
                            <FontAwesomeIcon
                                className="overlap"
                                style={{
                                    position: `relative`,
                                    right: `10%`,
                                    transform: `rotate(-10deg)`,
                                }}
                                size={`lg`}
                                icon={[`fas`, `sun`]}
                                color="rgba(255,255,255,0.6)"
                            />
                        </span>
                    ) : (
                        <span
                            className={classnames(jumpEffect)}
                            style={{
                                display: `grid`,
                                gridTemplateColumns: `1fr`,
                                gridTemplateRows: `1fr`,
                                gridTemplateAreas: `'overlap'`,
                                margin: 0,
                                gridGap: 0,
                                padding: 0,
                            }}
                        >
                            <FontAwesomeIcon
                                className="overlap"
                                style={{
                                    filter: `drop-shadow(1px 1px 1px #000000)`,
                                    // transform: `scaleX(-1)`,
                                    transform: `rotate(-10deg)`,
                                }}
                                size={`lg`}
                                icon={[`fas`, `moon`]}
                                color="black"
                                opacity={0.5}
                            />
                            <FontAwesomeIcon
                                className="overlap"
                                style={{
                                    filter: `drop-shadow(1px 1px 1px #ffffff)`,
                                    position: `relative`,
                                    right: `10%`,
                                    transform: `rotate(-10deg)`,
                                    // transform: `scaleX(-1)`,
                                }}
                                size={`lg`}
                                icon={[`fas`, `moon`]}
                                color="rgba(255,255,255,0.4)"
                            />
                        </span>
                    )}
                </span>
            </div>
            <Footer backgroundDark={backgroundDark} />
        </>
    )
}

export default Index
