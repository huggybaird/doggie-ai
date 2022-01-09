import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import logo from "../images/zobo-logo-200x64.jpg" // Tell webpack this JS file uses this image
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  activeLink,
} from './layout.module.css'
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) 
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
       {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <nav> 
        <ul className={navLinks} >
        <li>
          <Link to='/' className={'navBarBrand'}>
                <img
                  /*className={'img-responsive displayInline'}*/
                  src={logo} /*{'/images/zobo-logo-300x96.jpg'}*/
                  alt={'Zobo'}
                />
              </Link>
          </li>
          <li className={navLinkItem}>
       {/* <Link to="/" className={navLinkText}  activeStyle={{color: "rgb(226, 148, 3)" }}  > */}
            <Link to="/" className={navLinkText}  activeClassName={activeLink}  >
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}  activeClassName={activeLink} partiallyActive={true}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText} activeClassName={activeLink} partiallyActive={true}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout