import React from 'react'
import { Link } from 'react-router-dom'

const SideMenuLogo = () => {
  return (
    <div>
       <Link
        to="/"
        className="text-gray-50 lg:text-4xl md:text-2xl  text-xl font-bold  font-DancingScript"
      >
        Work<span className="text-violet-400">buddy</span>
      </Link>
    </div>
  )
}

export default SideMenuLogo