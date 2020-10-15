import React from 'react'

import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

export default function MyBackgroundImage({ backgroundOpacity }) {

    const data = useStaticQuery(
        graphql`
            query {
                static: file(relativePath: { eq: "creative-commons-zen.jpg" }) {
                    childImageSharp {
                        fluid(quality: 45, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

    const imageData = data.static.childImageSharp.fluid

    return <BackgroundImage
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
    ></BackgroundImage>
}