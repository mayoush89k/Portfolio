import React from 'react'
import './heroSection.css'
import logo from  '../../assets/hero.png'

export default function HeroSection() {
  return (
    <div id='heroSection'>
      <main id='main-heroSection'>
        <img src={logo} alt="logo" />
        <h2>Welcome To MAY KARAM's Website</h2>
      </main>

    </div>
  )
}
