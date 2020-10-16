import React from 'react'

import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

export default function MyBackgroundImage({ backgroundOpacity, setLoaded }) {

    const data = useStaticQuery(
        graphql`
            query {
                static: file(relativePath: { eq: "creative-commons-zen.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

    const imageData = data.static.childImageSharp.fluid

    return <Img
        Tag="section"
        loading="eager"
        className="page-header"
        style={{
            position: "absolute",
            // backgroundColor: "rgba(255,255,255,1)",
            opacity: backgroundOpacity,
            transition: "opacity 3s linear",
        }}
        fluid={imageData}
        onLoad={setLoaded(true)}
    ></Img>
}