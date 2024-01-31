import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email2.png'
import pdf from '../assets/pdf.png'
import resume from '../assets/resume.pdf'

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full border-t-4 border-gray-300 z-20">
            <div className="flex bg-violet-500 align center h-11 gap-3 px-2 items-center">
                <div className="">
                    <p className="bg-white rounded-full font-pixel px-4 text-3xl cursor-pointer">rachel heo</p>
                </div>
                <a href="https://github.com/rheo5" target="_blank" title="github">
                    <img src={github} alt="github" className="w-7 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/rachel-heo/" target="_blank" title="linkedin">
                    <img src={linkedin} alt="linkedin" className="w-8 cursor-pointer"/>
                </a>
                <a href="mailto:rheo@uwaterloo.ca" target="_blank" title="email">
                    <img src={email} alt="email" className="w-8 cursor-pointer"/>
                </a>
                <a href={resume} target="_blank" title="resume">
                    <img src={pdf} alt="pdf" className="w-8 cursor-pointer"/>
                </a>
            </div>
        </div>
    )
}

export default Footer