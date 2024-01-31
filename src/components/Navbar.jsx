// import 'tailwindcss/tailwind.css';
import React, { useState } from 'react'

const Navbar = () => {
  const [folder, setFolder] = useState(false);

  const projects = [
    {
      id : 1,
      name: "coming soon",
    },
    {
      id : 2,
      name: "Project 2",
    },
    {
      id : 3,
      name: "Project 3",
    },
  ]

  return (
    <div className="shrink-0 grow-0 flex flex-col fixed h-full w-32 items-center border border-gray-500 z-10">
        {/* <h1 className="text-2xl text-white">hello</h1> */}

        <ul className="hidden md:flex flex-col max-w-32">

          {projects.map(({id, name}) => (
            <li key={id} className="text-white text-center font-pixel px-2 py-2 cursor-pointer font-bold hover:text-black">
              {name}
            </li>
          ))}

        </ul>

        <div onClick={()=> setFolder(!folder)} className="cursor-pointer md:hidden">
          {folder ? <h1 className="text-yellow-300">open folder</h1> : <h1 className="text-black">folder icon</h1>}
        </div>

        {/* <ul className="flex flex-row justify-center absolute top-16 left-96 w-[50vw] h-[80vh] bg-gradient-to-b from-black to-gray-500"> */}
        {folder && (
          <ul className="fixed inset-0 flex flex-row bg-gradient-to-b from-black to-gray-500 gap-4 w-1/2 h-1/2 mx-auto my-auto ">
          {projects.map(({id, name}) => (
              <li key={id} className="text-white font-pixel py-2 cursor-pointer font-bold hover:text-black">
                {name}
              </li>
            ))}
          </ul>
        )}
        
    </div>
  )
}

export default Navbar