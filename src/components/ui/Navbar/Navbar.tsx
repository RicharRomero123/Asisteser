"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Img } from '@chakra-ui/react'
import { BiLogoFacebookSquare, BiLogoInstagram } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false)

  const closeNavbar = () => {
    setNavIsOpened(false)
  }

  const toggleNavbar = () => {
    setNavIsOpened(navIsOpened => !navIsOpened)
  }

  return (
    <>
      <div aria-hidden={true} onClick={() => {
        closeNavbar()
      }} className={
        `fixed bg-mediumBlue/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`
      } />
      <header className="sticky top-0 w-full flex items-center h-20 border-b  dark:border-b-veryDarkBlue z-40 bg-bright/70 dark:bg-veryDarkBlue/95 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max gap-4">
            <Link href="/" className="relative flex items-center gap-4">
              <Img src="/image/Asisteser.png" alt="Asisteser Icon" className="h-20 w-20" />
              <span className="text-2xl font-bold text-mediumBlue dark:text-light">Asisteser</span>
            </Link>
          </div>
          <div className={`
            absolute top-full left-0 bg-bright dark:bg-veryDarkBlue lg:bg-transparent border-b border-light dark:border-veryDarkBlue py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6
            ${navIsOpened ? "visible opacity-100 translate-y-0" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
          `}>
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-light dark:text-white lg:w-full lg:justify-center">
              <li>
                <Link href="/#home" className="relative py-2.5 duration-300 ease-linear hover:text-green-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-green-600">Home</Link>
              </li>
              <li>
                <Link href="/#nosotros" className="relative py-2.5 duration-300 ease-linear hover:text-green-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-green-600">Nosotros</Link>
              </li>
              <li>
                <Link href="/#servicios" className="relative py-2.5 duration-300 ease-linear hover:text-green-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-green-600">Servicios</Link>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0 sm:justify-center sm:text-center">
              <a href="https://wa.link/s79nyd" className="relative flex justify-center px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-light dark:before:bg-veryDarkBlue text-mediumBlue dark:text-light hover:before:scale-105 hover:text-green-600 dark:hover:text-green-600">
                <span className="relative">
                  ¡Contáctanos Ahora!
                </span>
              </a>
              <div className="flex gap-4 justify-center">
                <a href="https://www.facebook.com/asisteser" target="_blank" rel="noopener noreferrer">
                  <BiLogoFacebookSquare className="text-3xl text-light dark:text-white hover:text-green-600" />
                </a>
                <a href="https://www.instagram.com/asisteser?igsh=NjMyNmNhc251emZu" target="_blank" rel="noopener noreferrer">
                  <BiLogoInstagram className="text-3xl text-light dark:text-white hover:text-green-600" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button onClick={() => {
              toggleNavbar()
            }} aria-label='toggle navbar' className="outline-none border-l border-l-mediumBlue dark:border-l-veryDarkBlue pl-3 relative py-3">
              <span aria-hidden={true} className={`
                flex h-0.5 w-6 rounded bg-black dark:bg-light transition duration-300
                ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
              `}>
              </span>
              <span aria-hidden={true} className={`
                mt-2 flex h-0.5 w-6 rounded bg-mediumBlue dark:bg-light transition duration-300
                ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
              `} />
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-mediumBlue dark:text-light">
            <FiPhone className="text-2xl" />
            <span className="text-lg font-bold">967 930 749</span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
