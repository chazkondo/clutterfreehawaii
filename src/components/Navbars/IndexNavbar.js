import React from "react"
// nodejs library that concatenates strings
import classnames from "classnames"
// reactstrap components
import {
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap"

import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"
import e from "cors"
import { ClassNames } from "@emotion/core"

const stopPropagation = event => event.stopPropagation()

function IndexNavbar(props) {
    const [state, dispatch] = React.useReducer(reducer, {
        navbarColor: `navbar-transparent`,
    })
    const [loading, setLoading] = React.useState(0)
    const [divLoading, setDivLoading] = React.useState(false)
    const [tier, changeTier] = React.useState(0)

    function reducer(state, action) {
        switch (action.type) {
        case `isBeforeMarker`:
            return { navbarColor: `navbar-transparent` }
        case `isPastMarker`:
            return { navbarColor: `` }
        default:
            throw new Error()
        }
    }

    const [navbarCollapse, setNavbarCollapse] = React.useState(false)
    const [smDropdownOpen, setSmDropdownOpen] = React.useState(false)
    const [dropdownOpen, setDropdownOpen] = React.useState(false)
    const wrapperRef = React.useRef(null)
    const [readingProgress, setReadingProgress] = React.useState(0)

    const scrollListener = () => {
        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight -
            0.04 *
                (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight)
        const windowScrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0

        if (windowScrollTop === 0) {
            return setReadingProgress(0)
        }

        if (windowScrollTop > totalHeight) {
            return setReadingProgress(100)
        }

        setReadingProgress((windowScrollTop / totalHeight) * 100)
    }

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(navbarCollapse => !navbarCollapse)
        document.documentElement.classList.toggle(`nav-open`)
        setTimeout(() => changeTier(0), 200)
    }

    const toggle = () => setDropdownOpen(!dropdownOpen)
    const toggleSm = () => setSmDropdownOpen(!smDropdownOpen)

    const handleClickOutside = (event) => {
        console.log(
            wrapperRef.current,
            `hello?`,
            event.target,
            !wrapperRef.current.contains(event.target)
        )

        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setNavbarCollapse(false)
            document.documentElement.classList.remove(`nav-open`)
            setTimeout(() => changeTier(0), 200)
        }
    }

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                dispatch({ type: `isPastMarker` })
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                dispatch({ type: `isBeforeMarker` })
            }
        }

        window.addEventListener(`scroll`, updateNavbarColor)

        return function cleanup() {
            window.removeEventListener(`scroll`, updateNavbarColor)
        }
    })

    React.useEffect(() => {
        document.addEventListener(`click`, handleClickOutside, false)
        return () => {
            document.removeEventListener(`click`, handleClickOutside, false)
        }
    }, [])

    React.useEffect(() => {
        window.addEventListener(`scroll`, scrollListener)
        return () => window.removeEventListener(`scroll`, scrollListener)
    })

    React.useEffect(() => {
        let load
        function startTransition() {
            setDivLoading(true)
            load = setTimeout(() => setLoading(1), 1)
        }

        const divload = setTimeout(() => startTransition(), 500)

        return () => {
            clearTimeout(load)
            clearTimeout(divload)
        }
    }, [loading, divLoading])

    return (
        <StaticQuery
            query={graphql`
                {
                    allGhostTag {
                        nodes {
                            slug
                            visibility
                            name
                        }
                    }
                }
            `}
            render={data => (
                <div ref={wrapperRef}>
                    {divLoading && (
                        <Navbar
                            style={{
                                opacity: loading,
                            }}
                            className={
                                props.backgroundDark
                                    ? classnames(
                                        `fixed-top`,
                                        state.navbarColor,
                                        `darkmode`
                                    )
                                    : classnames(
                                        `fixed-top`,
                                        state.navbarColor,
                                        `lightmode`
                                    )
                            }
                            expand="lg"
                        >
                            <Container>
                                <div
                                    className={classnames(`navbar-translate`, {
                                        darkMode: props.backgroundDark,
                                        lightMode: !props.backgroundDark,
                                    })}
                                    onClick={stopPropagation}
                                >
                                    <NavbarBrand
                                        data-placement="bottom"
                                        href="/"
                                        title="Clutter Free Hawaii"
                                    >
                                        Clutter Free Hawai'i
                                    </NavbarBrand>
                                    <button
                                        aria-expanded={navbarCollapse}
                                        className={classnames(
                                            `navbar-toggler navbar-toggler`,
                                            {
                                                toggled: navbarCollapse,
                                            }
                                        )}
                                        onClick={toggleNavbarCollapse}
                                    >
                                        <span className="navbar-toggler-bar bar1" />
                                        <span className="navbar-toggler-bar bar2" />
                                        <span className="navbar-toggler-bar bar3" />
                                    </button>
                                </div>
                                <Collapse
                                    className={classnames(
                                        `justify-content-end`,
                                        {
                                            darkMode: props.backgroundDark,
                                            lightMode: !props.backgroundDark,
                                        }
                                    )}
                                    navbar
                                    isOpen={navbarCollapse}
                                >
                                    <Nav
                                        className={classnames({
                                            darkMode: props.backgroundDark,
                                            lightMode: !props.backgroundDark,
                                        })}
                                        navbar
                                    >
                                        <NavItem
                                            className="d-lg-none"
                                            style={{
                                                display:
                                                    tier === 0
                                                        ? `block`
                                                        : `none`,
                                            }}
                                        >
                                            <NavLink disabled href="#">
                                                Main Menu
                                                <hr />
                                            </NavLink>
                                        </NavItem>
                                        <NavItem
                                            className="d-lg-none"
                                            style={{
                                                display:
                                                    tier !== 0
                                                        ? `block`
                                                        : `none`,
                                            }}
                                        >
                                            <NavLink
                                                style={{ cursor: `pointer` }}
                                                target="_blank"
                                                onClick={() => {
                                                    changeTier(0)
                                                }}
                                                data-placement="bottom"
                                                title="Follow us on Instagram"
                                            >
                                                Back
                                                <hr />
                                            </NavLink>
                                        </NavItem>
                                        {tier === 1 && (
                                            <NavItem>
                                                <p
                                                    style={{
                                                        fontSize: `1em`,
                                                        opacity: 0.8,
                                                    }}
                                                >
                                                    Social Media
                                                </p>
                                            </NavItem>
                                        )}
                                        <NavItem
                                            className={
                                                tier === 1
                                                    ? ``
                                                    : `d-none d-lg-block`
                                            }
                                        >
                                            <NavLink
                                                data-placement="bottom"
                                                href="https://twitter.com/clutterfreehawaii"
                                                target="_blank"
                                                title="Follow us on Twitter"
                                            >
                                                <FontAwesomeIcon
                                                    size={`lg`}
                                                    icon={[`fab`, `twitter`]}
                                                />
                                                <p className="d-lg-none">
                                                    {` `}
                                                    Twitter
                                                </p>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem
                                            className={
                                                tier === 1
                                                    ? ``
                                                    : `d-none d-lg-block`
                                            }
                                        >
                                            <NavLink
                                                data-placement="bottom"
                                                href="https://www.facebook.com/clutterfreehawaii"
                                                target="_blank"
                                                title="Like us on Facebook"
                                            >
                                                <FontAwesomeIcon
                                                    size={`lg`}
                                                    icon={[`fab`, `facebook`]}
                                                />
                                                <p className="d-lg-none">
                                                    {` `}
                                                    Facebook
                                                </p>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem
                                            className={
                                                tier === 1
                                                    ? ``
                                                    : `d-none d-lg-block`
                                            }
                                        >
                                            <NavLink
                                                data-placement="bottom"
                                                href="https://www.instagram.com/clutterfreehawaii"
                                                target="_blank"
                                                title="Follow us on Instagram"
                                            >
                                                <FontAwesomeIcon
                                                    size={`lg`}
                                                    icon={[`fab`, `instagram`]}
                                                />
                                                <p className="d-lg-none">
                                                    {` `}
                                                    Instagram
                                                </p>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem
                                            className={
                                                tier === 1
                                                    ? ``
                                                    : `d-none d-lg-block`
                                            }
                                        >
                                            <NavLink
                                                data-placement="bottom"
                                                href="https://www.youtube.com/clutterfreehawaii"
                                                target="_blank"
                                                title="Youtube"
                                            >
                                                <FontAwesomeIcon
                                                    size={`lg`}
                                                    icon={[`fab`, `youtube`]}
                                                />
                                                <p className="d-lg-none">
                                                    {` `}
                                                    Youtube
                                                </p>
                                            </NavLink>
                                        </NavItem>
                                        {tier === 2 && (
                                            <>
                                                <NavItem>
                                                    <p
                                                        style={{
                                                            fontSize: `1em`,
                                                            opacity: 0.8,
                                                        }}
                                                    >
                                                        Blog
                                                    </p>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        onClick={
                                                            toggleNavbarCollapse
                                                        }
                                                        data-placement="bottom"
                                                        href="/blog"
                                                        title="Blog Posts"
                                                    >
                                                        ○ All Posts
                                                    </NavLink>
                                                </NavItem>
                                                {data.allGhostTag.nodes.map(
                                                    (tag) => {
                                                        if (
                                                            tag.slug ===
                                                            `data-schema`
                                                        ) {
                                                        } else {
                                                            return (
                                                                <NavItem>
                                                                    <NavLink
                                                                        onClick={
                                                                            toggleNavbarCollapse
                                                                        }
                                                                        key={
                                                                            tag.slug +
                                                                            1
                                                                        }
                                                                        data-placement="bottom"
                                                                        href={`/tag/${tag.slug}`}
                                                                        title={`${tag.slug} Blog Posts`}
                                                                    >
                                                                        ○
                                                                        {` #${tag.name}`}
                                                                    </NavLink>
                                                                </NavItem>
                                                            )
                                                        }
                                                    }
                                                )}
                                            </>
                                        )}

                                        {tier === 0 && (
                                            <>
                                                <NavItem>
                                                    <NavLink
                                                        onClick={
                                                            toggleNavbarCollapse
                                                        }
                                                        className="d-lg-none"
                                                        data-placement="bottom"
                                                        href="/"
                                                        title="Follow us on Instagram"
                                                    >
                                                        Home
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        data-placement="bottom"
                                                        href="mailto:clutterfreehawaii@gmail.com"
                                                        target="_blank"
                                                        title="Follow us on Instagram"
                                                    >
                                                        Contact
                                                    </NavLink>
                                                </NavItem>
                                                <Dropdown
                                                    nav
                                                    className="d-none d-lg-block"
                                                    isOpen={dropdownOpen}
                                                    toggle={toggle}
                                                >
                                                    <DropdownToggle nav caret>
                                                        Blog
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem
                                                            data-placement="bottom"
                                                            href="/blog"
                                                            title="Blog Posts"
                                                        >
                                                            All Posts
                                                        </DropdownItem>
                                                        {data.allGhostTag.nodes.map(
                                                            (tag) => {
                                                                if (
                                                                    tag.slug ===
                                                                    `data-schema`
                                                                ) {
                                                                } else {
                                                                    return (
                                                                        <DropdownItem
                                                                            key={
                                                                                tag.slug
                                                                            }
                                                                            data-placement="bottom"
                                                                            href={`/tag/${tag.slug}`}
                                                                            title={`${tag.slug} Blog Posts`}
                                                                        >
                                                                            {`#${tag.name}`}
                                                                        </DropdownItem>
                                                                    )
                                                                }
                                                            }
                                                        )}
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </>
                                        )}
                                        <NavItem
                                            className="d-lg-none"
                                            style={{
                                                display:
                                                    tier === 0
                                                        ? `block`
                                                        : `none`,
                                            }}
                                        >
                                            <NavLink
                                                style={{ cursor: `pointer` }}
                                                onClick={() => {
                                                    changeTier(1)
                                                }}
                                                data-placement="bottom"
                                                title="Follow us on Social Media"
                                            >
                                                Social Media
                                            </NavLink>
                                        </NavItem>
                                        <NavItem
                                            className="d-lg-none"
                                            style={{
                                                display:
                                                    tier === 0
                                                        ? `block`
                                                        : `none`,
                                            }}
                                        >
                                            <NavLink
                                                style={{ cursor: `pointer` }}
                                                onClick={() => {
                                                    changeTier(2)
                                                }}
                                                data-placement="bottom"
                                                title="Visit our Blog"
                                            >
                                                Blog
                                            </NavLink>
                                        </NavItem>
                                        <NavItem></NavItem>
                                    </Nav>
                                </Collapse>
                            </Container>
                        </Navbar>
                    )}
                    {props.showProgressBar && (
                        <div
                            className={classnames(
                                `reading-progress-bar`,
                                `fixed-top`,
                                state.navbarColor
                            )}
                            style={{
                                position: `fixed`,
                                backgroundColor: props.backgroundDark
                                    ? `mediumspringgreen`
                                    : ``,
                                width: `${readingProgress}%`,
                            }}
                        />
                    )}
                </div>
            )}
        />
    )
}

export default IndexNavbar
