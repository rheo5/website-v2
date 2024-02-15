import me from "../assets/me.jpg";
import bglight from "../assets/bg-light.png";
import bgdark from "../assets/bg-dark.png";
import { FaRegWindowMinimize } from "react-icons/fa6";
import { FaRegWindowMaximize } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Home = () => {
  return (
    <div className="w-full h-full">
      <img
        src={bglight}
        alt="bg"
        className="top-0 left-0 w-full h-screen object-cover"
      />
      {/* <img src="https://64.media.tumblr.com/fa16ba923a8bb8c447eaab9aad534a75/tumblr_nfvigoHWT61qlhvfoo1_500.gifv" alt="bg" className="top-0 left-0 w-full h-screen object-cover"/> */}
      <div className="absolute top-0 w-full h-screen">
        <div className="px-32 w-full md:h-full overflow-y-auto">
          <div className="py-8 flex flex-col items-center justify-center md:h-full md:flex-row lg:gap-36 md:gap-10 gap-20">
            <div className="w-96 md:mb-40 border-2 border-white">
              <div className="px-3 font-pixel bg-gray-300 flex justify-between items-center">
                <p>me.png</p>
                <div className="flex gap-3">
                  <FaRegWindowMinimize className="text-xs" />
                  <FaRegWindowMaximize className="text-xs" />
                  <MdClose className="text-xs" />
                </div>
              </div>
              <img
                src={me}
                alt="me"
                className="border-l-8 border-r-8 border-b-8 border-gray-300"
              />
            </div>
            <div className="w-96 md:mt-20 border-2 border-white">
              <div className="px-3 font-pixel bg-gray-300 flex justify-between items-center">
                <p>about_me.txt</p>
                <div className="flex gap-3">
                  <FaRegWindowMinimize className="text-xs" />
                  <FaRegWindowMaximize className="text-xs" />
                  <MdClose className="text-xs" />
                </div>
              </div>
              <div className="bg-white border-l-8 border-r-8 border-b-8 border-gray-300 p-3">
                <p className="px-4 font-pixel text-2xl font-medium">
                  hello, i am rachel heo !!!<br></br>
                  <br></br>{" "}
                </p>
                <p className="px-4 font-pixel text-xl font-medium">
                  recently :
                </p>
                <ul className="px-6 list-disc font-pixel text-lg">
                  <li>
                    2nd year studying software engineering @ university of
                    waterloo
                  </li>
                  <li>
                    swe intern @{" "}
                    <a
                      href="https://www.augmenta.ai/"
                      target="_blank"
                      className="text-blue-500"
                    >
                      augmenta
                    </a>
                  </li>
                  <li>been reading a lot to fulfill my new years goals</li>
                </ul>
                <br></br>
                <p className="px-4 font-pixel text-xl font-medium">
                  looking forward to :
                </p>
                <ul className="px-6 list-disc font-pixel text-lg">
                  <li>getting into product management (pm) !</li>
                  <li>gaining more experience as swe</li>
                  <li>enter my twenties !</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
