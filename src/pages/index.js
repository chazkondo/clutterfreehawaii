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

//css
import "../assets/css/bootstrap.min.css"
import "../assets/scss/paper-kit.scss?v=1.2.0"
import "../assets/demo/demo.css?v=1.2.0"

// helper
import useWindowSize from "../components/Helpers/useWindowSize.js"

// helmet
import { Helmet } from "react-helmet"

function Index() {
    const [backgroundDark, setBackgroundDark] = React.useState(false)
    const size = useWindowSize()
    const title = `Clutter Free. Zero Stress. Your Local Hero.`

    React.useLayoutEffect(() => {
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 18
        setBackgroundDark(!isDayTime)
    }, [])

    return (
        <>
            <Helmet title={title} defer={false}>
                <title>{title}</title>
                <link rel="icon" href="/favicon.jpg" />
                <meta property="og:title" content={title} />
                <meta
                    property="og:url"
                    content="https://clutterfreehawaii.com"
                />
                <meta
                    property="og:image"
                    content="https://clutterfreehawaii.com/snap.png"
                />
                <meta
                    property="og:description"
                    content="Your top rated and simple clutter removal service."
                />
                <meta property="og:site_name" content="Clutter Free Hawaii" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta
                    name="twitter:description"
                    content="Your top rated and simple clutter removal service."
                />
                <meta name="twitter:creator" content="@DevinLonso" />
                <meta
                    name="twitter:image"
                    content="https://clutterfreehawaii.com/organized.png"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <link rel="shortcut icon" href="/favicon.jpg" />
            </Helmet>
            <IndexNavbar showProgressBar backgroundDark={backgroundDark} />
            <IndexHeader backgroundDark={backgroundDark} size={size} />
            <div className="main">
                <Section1 backgroundDark={backgroundDark} size={size} />
                <Section2 backgroundDark={backgroundDark} />
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
