import React from 'react'

const Navbar = () => {
  return (

    <nav className='bg-slate-800 text-white '>
      <div className="mycontainer flex justify-between px-4 h-12 items-center">

        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>
        </div>
        <ul>
          {/* <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li> */}
        </ul>
        <button className='text-white bg-green-700 rounded-full p-1 flex gap-2 items-center'>
          <img className='invert p-1 cursor-pointer' src="icons/github.svg" alt="github-logo" />
          <span className='font-bold p-1'>GitHub</span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
