import React from 'react'

import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

export default function MyBackgroundImage({ backgroundOpacity, setLoaded }) {

    const data = useStaticQuery(
        graphql`
            query {
                static1: file(relativePath: { eq: "creative-commons-zen-large.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                static2: file(relativePath: { eq: "creative-commons-zen.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1280) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                static3: file(relativePath: { eq: "creative-commons-zen-small.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 640) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                static4: file(relativePath: { eq: "creative-commons-zen-xs.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 400) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

    const sources = [
        {
            ...data.static3.childImageSharp.fluid,
            media: `(max-width: 300px)`
        },
        {
            ...data.static2.childImageSharp.fluid,
            media: `(min-width: 301px) and (max-width: 999px)`,
          },
        {
          ...data.static1.childImageSharp.fluid,
          media: `(min-width: 1000px)`,
        },
        // {
        //     ...data.static1.childImageSharp.fluid,
        //     media: `(min-width: 1920px)`,
        //   },
      ]

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
        fluid={sources}
        onLoad={()=>setLoaded(true)}
        onStartLoad={()=>setLoaded(false)}
    ></Img>
}