"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink'

const Links = () => {

    const [open,setOpen] = useState(false)
  
    const links = [
        {
            title : "Home",
            path : '/'
        },
        {
            title : "About",
            path : '/about'
        },
        {
            title : "Contact",
            path : '/contact'
        },
        {
            title : "Blog",
            path : '/blog'
        },
    ]



  //Temporary
  const session = true
  const admin = true


  return (

    <div className={styles.container}>
    <div className={styles.links}>

        {links.map((link)=>{
            return <NavLink item={link}></NavLink>
        })}

        {session?(
        <>
        {admin &&  <NavLink item={{title:"Admin" , path:"/admin"}}/>}

         <button className={styles.logout}>Logout</button>
         </>
        ):(<>
            <NavLink item={{title:"Login" , path:"/login"}}/></>
        )}


    </div>




    <button className={styles.menuButton} onClick={()=>setOpen(pre=>!pre)}>Menu</button>


    {
        open && (
            <div className={styles.mobileLinks}>
                  {links.map((link)=>{
            return <NavLink item={link}></NavLink>
        })}
            </div>
        )
    }





    </div>


    
  )
}

export default Links