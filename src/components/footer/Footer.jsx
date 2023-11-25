import React from 'react'
import './footer.css'
import { FaArrowUp } from "react-icons/fa"

export default function Footer() {
  return (
    <div id='footer'>
      ©Copyright 2023 May Karam
      <button id='top'><a href="#heroSection"><FaArrowUp/>Top</a></button>
    </div>
  )
}
