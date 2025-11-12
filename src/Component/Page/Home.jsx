import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer'
import Feature from './Feature'

export default function Home() {
  return (
    <div>
    <Hero/>
    <Feature/>
    </div>
  )
}
