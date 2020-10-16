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

import LightSwitch from "../components/Buttons/LightSwitch/LightSwitch.jsx"
import Loading from "../components/Loading/Loading.jsx"

//css
import "../assets/css/bootstrap.min.css"
import "../assets/scss/paper-kit.scss?v=1.2.0"
import "../assets/demo/demo.css?v=1.2.0"

function Index() {
    const [borderVisible, setBorderVisible] = React.useState(false)
    const [backgroundDark, setBackgroundDark] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)

    React.useLayoutEffect(() => {
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 18
        setBackgroundDark(!isDayTime)
    }, [])

    return (
        <>
            <IndexNavbar showProgressBar backgroundDark={backgroundDark} />
            <IndexHeader
                backgroundDark={backgroundDark}
                loaded={loaded}
                setLoaded={setLoaded}
            />
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
            </div>
            <LightSwitch
                backgroundDark={backgroundDark}
                setBackgroundDark={setBackgroundDark}
            />
            <Footer backgroundDark={backgroundDark} />
        </>
    )
}

export default Index
