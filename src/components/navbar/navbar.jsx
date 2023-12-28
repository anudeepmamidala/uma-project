import Link from 'next/link'
import React from 'react'
import Links from './links/links'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <Links></Links>
    </div>
  )
}

export default Navbar