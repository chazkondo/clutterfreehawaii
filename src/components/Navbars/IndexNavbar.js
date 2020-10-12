import React from "react"
// nodejs library that concatenates strings
import classnames from "classnames"
// reactstrap components
import {
    Progress,
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

const stopPropagation = event => event.stopPropagation()

function IndexNavbar(props) {
    const [state, dispatch] = React.useReducer(reducer, {
        navbarColor: `navbar-transparent`,
    })
    const [loading, setLoading] = React.useState(0)
    const [divLoading, setDivLoading] = React.useState(false)

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
    const [dropdownOpen, setDropdownOpen] = React.useState(false)
    const wrapperRef = React.useRef(null)
    const [readingProgress, setReadingProgress] = React.useState(0)

    const scrollListener = () => {
        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
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
    }

    const toggle = () => setDropdownOpen(!dropdownOpen)

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
                                    : classnames(`fixed-top`, state.navbarColor)
                            }
                            expand="lg"
                        >
                            <Container>
                                <div
                                    className="navbar-translate"
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
                                    className="justify-content-end"
                                    navbar
                                    isOpen={navbarCollapse}
                                >
                                    <Nav
                                        className={
                                            props.backgroundDark
                                                ? `darkMode`
                                                : ``
                                        }
                                        navbar
                                    >
                                        <NavItem>
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
                                                    Twitter
                                                </p>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
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
                                                    Facebook
                                                </p>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
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
                                                    Instagram
                                                </p>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
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
                                                    Youtube
                                                </p>
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
