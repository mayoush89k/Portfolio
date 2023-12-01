import React from 'react'
import './heroSection.css'

export default function HeroSection({firstName, lastName, logo}) {
  return (
    <div id='heroSection'>
      <main id='main-heroSection'>
        <img src={logo} alt="logo" />
        <h2>Welcome To {firstName.toUpperCase()} {lastName.toUpperCase()}'s Website</h2>
      </main>

    </div>
  )
}
