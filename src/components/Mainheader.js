import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Social from './Social'

export default function Mainheader() {
  return (
    <>
        <Navbar/>
        <Social/>
        <Outlet></Outlet>
    </>
    )
};
