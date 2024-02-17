import React, { useState } from "react";
import { FaRegWindowMinimize } from "react-icons/fa6";
import { FaRegWindowMaximize } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [folder, setFolder] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Giev",
      image:
        "https://storage.googleapis.com/ethglobal-api-production/events/bv0fv/logo/1690291612606_eg-sq.png",
      link: "https://ethglobal.com/showcase/giev-vhjwu",
    },
    {
      id: 2,
      name: "WLP4 compiler",
      image:
        "https://cdn3.iconfinder.com/data/icons/source-code-script-api-and-commands/512/program-compile-settings-gear-code-configuration-512.png",
      link: "https://github.com/rheo5/WLP4-compiler",
    },
    {
      id: 3,
      name: "Weather Box",
      image: "https://cdn-icons-png.flaticon.com/512/365/365852.png",
      link: "https://github.com/rheo5/WeatherBox",
    },
  ];

  return (
    <div className="shrink-0 grow-0 flex flex-col fixed w-18 sm:w-32 z-10">
      <ul className="hidden md:flex flex-col max-w-32 items-center">
        {projects.map(({ id, name, image, link }) => (
          <li
            key={id}
            className="text-black text-center font-pixel px-2 py-2 cursor-pointer hover:text-white"
          >
            <div>
              <a
                href={link}
                target="_blank"
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={image}
                  alt="ProjectLogo"
                  className="w-12 cursor-pointer"
                />
                <span>{name}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setFolder(!folder)}
        className="cursor-pointer md:hidden"
      >
        <div className="m-2 w-14 sm:w-28 sm:m-0 sm:my-5 flex flex-col items-center">
          <img
            src="https://marketplace.canva.cn/_8a38/MAE-N-_8a38/1/tl/canva-pixel-old-tech-folder-MAE-N-_8a38.png"
            alt="FolderIcon"
            className="w-10 sm:w-12 cursor-pointer"
          />
          {folder ? (
            <p className="text-xs sm:text-base font-pixel text-black cursor-pointer hover:text-white">
              close
            </p>
          ) : (
            <p className="text-xs sm:text-base font-pixel text-black cursor-pointer hover:text-white">
              folder
            </p>
          )}
        </div>
      </div>

      {folder && (
        <div>
          <div className="fixed inset-0 flex flex-col bg-white w-10/12 h-1/2 mx-auto my-auto border-2 border-white">
            <div className="px-3 font-pixel bg-gray-300 flex justify-between items-center">
              <p>This PC > my_projects</p>
              <div className="flex gap-3">
                <FaRegWindowMinimize className="text-xs" />
                <FaRegWindowMaximize className="text-xs" />
                <MdClose className="text-xs" />
              </div>
            </div>
            <ul className="flex flex-row gap-5 px-4 py-4 h-full border-l-8 border-r-8 border-b-8 border-gray-300">
              {projects.map(({ id, name, image, link }) => (
                <li
                  key={id}
                  className="text-black text-center text-xs font-pixel px-2 py-2 cursor-pointer w-14 text-wrap"
                >
                  <div>
                    <a
                      href={link}
                      target="_blank"
                      className="flex flex-col items-center justify-center"
                    >
                      <img
                        src={image}
                        alt="ProjectLogo"
                        className="w-12 cursor-pointer"
                      />
                      <span>{name}</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
