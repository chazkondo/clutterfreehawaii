import React from "react"

import { Container } from 'reactstrap'
import { motion, useViewportScroll } from 'framer-motion'


import useIntersect from "../Helpers/useIntersect";
import { FadeBox, WidthBox } from "../Helpers/boxes";
import styled from "styled-components";

const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

const Button = styled.button`
  position: absolute;
  top: 2px;
  left: 2px;
  border: none;
  padding: 1rem;
  font-size: 1rem;
`;

const compToRender = [WidthBox, FadeBox];

const IntersectBox = props => {
    const [state, toggle] = React.useState(props.initial || 0);

    const [ref, entry] = useIntersect();

    const Component = compToRender[state];

    const componentName = state === 0 ? "FadeBox" : "WidthBox";

    return (
        <Component {...props} ref={ref} ratio={entry.intersectionRatio}>
            intersectionRatio: {format(entry.intersectionRatio)}
            <Button onClick={() => toggle(state === 0 ? 1 : 0)}>
                Switch to {componentName}
            </Button>
        </Component>
    );
};

const buildHexArray = quantity =>
    Array.from(Array(quantity).keys(), i =>
        Number((i + 1) * 100)
            .toString(16)
            .padStart(3, "0")
    );


function Section5({ backgroundDark }) {

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

    function detectWhere() {
        if (entry.intersectionRatio === 1 && exit.intersectionRatio === 1) {
            return true
        } else {
            return false
        }
    }

    function headerDetected() {
        if (header.intersectionRatio === 1 || end.intersectionRatio === 1) {
            return true
        }
    }


    function bottomDetected() {
        if (bottom.intersectionRatio === 1) {
            // setBorderVisible(true)
        } else {
            // setBorderVisible(false)
        }
    }

    return (
        <>
            <div
                className={backgroundDark ? "section1Dark" : "section1"}
                style={{
                    // width: '100%',
                    height: '70vh',
                }}>
                <div className={backgroundDark ? "sectionOverlayDark" : "sectionOverlay"} />
                <div style={{ textAlign: 'center', paddingTop: '0%', marginTop: '0%', }}>
                    <h1 style={{ color: backgroundDark ? 'white' : 'black' }}>What we do</h1>
                </div>
            </div>
            <span ref={endRef} />
        </>
    )
}

export default Section5
