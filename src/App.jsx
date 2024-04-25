import './output.css';
import './input.css';
import './RotatingLine.css';
import { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import Rami from './img/Rami.jpg';
import { FaPerson } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { IoLogoMicrosoft } from "react-icons/io5";
import { SiAutodesk } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrMultiple } from "react-icons/gr";
import { TiFlowSwitch } from "react-icons/ti";
import { IoExtensionPuzzle } from "react-icons/io5";
import { SiAwsorganizations } from "react-icons/si";
import { SiSololearn } from "react-icons/si";
import { FaComments } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineSegment } from "react-icons/md";
import EnglishActs from "./img/ActivityTime.png";
import Calculator from "./img/calculator.jpg";
import mrma from "./img/mrma.jpg";
import PPT from "./img/PPT.jpeg";
import B1Layer from "./img/B1-Layer.png";
import B2Layer from "./img/B2-Layer.png";
import SamplePlan from "./img/Sample-Plan.png";
import LessonPlan from "./img/Lesson-Plan.jpeg";

function App() {

  const [msOffice, setMsOffice] = useState(90);
  const [autocad, setAutocad] = useState(75);
  const [html, setHtml] = useState(95);
  const [css, setCss] = useState(85);
  const [tailwindCss, setTailwindCss] = useState(85);
  const [js, setJs] = useState(75);
  const [react, setReact] = useState(80);
  const [csTechnology, setCsTechnology] = useState(95);

  const handleHome = (e) => {
    e.preventDefault();
    const homeElement = document.querySelector('#Home');
    homeElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAbout = (e) => {
    e.preventDefault();
    const homeElement = document.querySelector('#About');
    homeElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSkills = (e) => {
    e.preventDefault();
    const homeElement = document.querySelector('#Skills');
    homeElement.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjects = (e) => {
    e.preventDefault();
    const projectElement = document.querySelector('#Projects');
    projectElement.scrollIntoView({ behavior: 'smooth' });
  }

  const handleContact = (e) => {
    e.preventDefault();
    const homeElement = document.querySelector('#Contact');
    homeElement.scrollIntoView({ behavior: 'smooth' });
  };

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:font-['cursive'] bg-black text-white">
      <nav className='fixed h-[60px] bg-black w-full pt-5 z-10'> {/* 1st Container */}
        <div className='flex flex-col md:flex-row justify-around md:items-center'>
          <div className='flex justify-around'>
          <h1 className='text-xl md:text-4xl font-bold'>Rami.</h1>
          <h2 className='text-4xl md:hidden cursor-pointer' onClick={toggleMenu}><MdOutlineSegment />
          </h2></div>
          <ul className={`md:flex md:text-xl transition-transform ease-in-out cursor-pointer
          ${isOpen ? 'custom-width block' : 'hidden'} md:block`}>
          <div className='flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20'>
          <a href='#Home' onClick={handleHome}>
          <li className='flex transition-all duration-500 hover:scale-125'>
          <IoHomeSharp className='m-0.5' /> Home</li></a>
          <a href='#About' onClick={handleAbout}>
          <li className='flex transition-all duration-500 hover:scale-125'>
          <FaCircleInfo className='m-0.5' /> About</li></a>
          <a href='#Skills' onClick={handleSkills}>
          <li className='flex transition-all duration-500 hover:scale-125'>
          <GiSkills className='m-0.5' /> Skills</li></a>
          <a href='#Projects' onClick={handleProjects}>
          <li className='flex transition-all duration-500 hover:scale-125'>
          <GoProjectSymlink className='m-0.5' /> Projects</li></a>
          <a href='#Contact' onClick={handleContact}>
          <li className='flex transition-all duration-500 hover:scale-125'>
          <IoMdContact className='m-0.5' /> Contact</li></a>
          </div>
        </ul>
        </div>
      </nav>

      <div id='Home' className='pt-32 text-center flex-col mb-28'> {/* 2nd Container */}
        <div className='box mx-auto'>
          <div className='content'>
          <img src={Rami} alt='My Photo' />
          </div>
        </div>
        <h3 className='text-sm md:text-2xl pt-5'>⭐ Hello, it's Rami! A multi-talented man. ⭐</h3><br />
        <h1 className='text-xl md:text-5xl'>Welcome To My Portfolio!</h1><br />
        <a href='#Contact' onClick={handleContact}>
          <button className='bg-gray-800 w-28 h-11 rounded-xl text-xl transition-all
        hover:bg-cyan-500 hover:scale-110 mb-20'>Hire me</button>
        </a>
      </div>

      <div id='About' className='w-full bg-cyan-800 rounded-[50px]'> {/* 3rd Container */}
        <h1 className='pt-14 text-2xl md:text-7xl text-center pb-10'>About me</h1>

        <div className='flex flex-col md:flex-row items-center justify-around md:px-5
        gap-5 pb-10 md:pb-20'>
        {/* Sub Container 1 */}

          <div className='w-[300px] text-center'>
            <FaPerson className='text-3xl md:text-7xl mx-auto' />
            <h2 className='text-xl md:text-4xl'>Personal Info</h2>
            <ul className='text-sm md:text-xl'>
              <li>Name: Rami Abed Al Karim</li>
              <li>Date of birth: 2001</li>
              <li>Country: Lebanon</li>
              <li>City: Tripoli</li>
              <li>Nationality: Palestinian</li>
            </ul>
          </div>

          <div className='w-[300px] text-center'>
            <FaGraduationCap className='text-3xl md:text-7xl mx-auto'  />
            <h2 className='text-xl md:text-4xl'>Education 1</h2>
            <ul className='text-sm md:text-xl'>
              <li>Major: English Teacher</li>
              <li>Institution: Lebanese International University (LIU)</li>
              <li>Degree: Bachelor</li>
              <li>Years: 2020 - 2024</li>
            </ul>
          </div>

          <div className='w-[300px] text-center'>
            <FaGraduationCap className='text-3xl md:text-7xl mx-auto'  />
            <h2 className='text-xl md:text-4xl'>Education 2</h2>
            <ul className='text-sm md:text-xl'>
              <li>Major: Civil Engineer</li>
              <li>Institution: UNRWA's Siblin Training Center (STC)</li>
              <li>Degree: Diploma</li>
              <li>Years: 2019 - 2021</li>
            </ul>
          </div>

        </div>

        <div className='flex flex-col md:flex-row items-center justify-around md:px-5
        gap-5 pb-10 md:pb-20'> 
        {/* Sub Container 2 */}

          <div className='w-[300px] text-center'>
            <FaGraduationCap className='text-3xl md:text-7xl mx-auto'  />
            <h2 className='text-xl md:text-4xl'>Education 3</h2>
            <ul className='text-sm md:text-xl'>
              <li>Major: Front End Web Developer</li>
              <li>Institution: FreeCodeCamp-Coursera</li>
              <li>Degree: Several Online Certificates</li>
              <li>Languages: HTML, CSS, Tailwind CSS, JS, and React JS</li>
            </ul>
          </div>

          <div className='w-[300px] text-center'>
            <IoLanguage className='text-3xl md:text-7xl mx-auto' />
            <h2 className='text-xl md:text-4xl'>Languages</h2>
            <ul className='text-sm md:text-xl'>
              <li>English (Very Fluent)</li>
              <li>Arabic (Mother Tongue)</li>
              <li>Russian (Only Basics)</li>
            </ul>
          </div>

          <div className='w-[300px] text-center'>
            <GrUserExpert className='text-3xl md:text-7xl mx-auto'  />
            <h2 className='text-xl md:text-4xl'>Experience</h2>
            <ul className='text-sm md:text-xl'>
              <li>Two-Month stage at SAYEDCO Building and Constructions.</li>
              <li>Two-month full time teaching at Reem Development Academy.</li>
              <li>80hrs teaching internship at UNRWA Elementary Schools.</li>
            </ul>
          </div>

        </div>

      </div>

      <div id='Skills' className='pt-20 pb-20'> {/* 4th Container */}
        <h1 className='pt-7 text-4xl md:text-7xl text-center pb-10 text-cyan-300'>Skills</h1>

        <h1 className='text-2xl md:text-4xl pb-10 text-cyan-300 text-center'>Computer Skills</h1>
        <div className='flex flex-col md:flex-row justify-around'> {/* Sub Container1 */}
        <div className='text-cyan-300 flex flex-col md:flex-row lg:gap-5'>

          <div>
          <div className='flex flex-col text-xl lg:text-2xl pb-5'>

            <div className='flex pl-2'>
              <IoLogoMicrosoft className='m-0.5' />
              <h2> Microsoft office</h2>
            </div>

            <div className='flex'>
              <input type='range' min="0" max="100" value={msOffice} readOnly 
              className='ml-3 mt-4 w-40 md:w-60 h-2 rounded-full
              appearance-none dark:bg-cyan-300' />
              <h2 className='ml-2'> (Excellent)</h2>
            </div>

          </div>

          <div className='flex flex-col text-xl lg:text-2xl pb-5'>

            <div className='flex pl-2'>
              <SiAutodesk className='m-0.5' />
              <h2> Autocad software</h2>
            </div>
            
            <div className='flex'>
              <input type='range' min="0" max="100" value={autocad} readOnly
              className='ml-3 mt-4 w-40 md:w-60 h-2 rounded-full
              appearance-none dark:bg-cyan-300' />
              <h2 className='ml-2'> (Good)</h2>
            </div>

          </div>

          <div className='flex flex-col text-xl lg:text-2xl pb-5'>

            <div className='flex pl-2'>
              <FaHtml5 className='m-0.5' />
              <h2> HTML</h2>
            </div>

            <div className='flex'>
              <input type='range' min="0" max="100" value={html} readOnly 
              className='ml-3 mt-4 w-40 md:w-60 h-2 rounded-full
              appearance-none dark:bg-cyan-300' />
              <h2 className='ml-2'> (Excellent)</h2>
            </div>
          
          </div>

          <div className='flex flex-col text-xl lg:text-2xl pb-5'>

            <div className='flex pl-2'>
              <FaCss3 className='m-0.5' />
              <h2> CSS</h2>
            </div>

            <div className='flex'>
              <input type='range' min="0" max="100" value={css} readOnly 
              className='ml-3 mt-4 w-40 md:w-60 h-2 rounded-full
              appearance-none dark:bg-cyan-300' />
              <h2 className='ml-2'> (Very Good)</h2>
            </div>
          
          </div>
          </div>

          <div className='md:w-2 md:h-[330px] md:rounded-full md:bg-cyan-300'></div>

          <div>
          <div className='flex flex-col text-xl lg:text-2xl pb-5'>

            <div className='flex pl-2'>
              <SiTailwindcss className='m-0.5' />
              <h2> Tailwind CSS</h2>
            </div>

            <div className='flex'>
              <input type='range' min="0" max="100" value={tailwindCss} readOnly 
              className='ml-3 mt-4 w-40 md:w-60 h-2 rounded-full
              appearance-none dark:bg-cyan-300' />
              <h2 className='ml-2'> (Very Good)</h2>
            </div>
          
          </div>

          <div className='flex flex-col text-xl lg:text-2xl pb-5'>

            <div className='flex pl-2'>
              <IoLogoJavascript className='m-0.5' />
              <h2> JavaScript</h2>
            </div>

            <div className='flex'>
              <input type='range' min="0" max="100" value={js} readOnly 
              className='ml-3 mt-4 w-40 md:w-60 h-2 rounded-full
              appearance-none dark:bg-cyan-300' />
              <h2 className='ml-2'> (Good)</h2>
            </div>
          
          </div>

          <div className='flex flex-col text-xl lg:text-2xl pb-5'>

            <div className='flex pl-2'>
              <FaReact className='m-0.5' />
              <h2> React JS</h2>
            </div>

            <div className='flex'>
              <input type='range' min="0" max="100" value={react} readOnly 
              className='ml-3 mt-4 w-40 md:w-60 h-2 rounded-full
              appearance-none dark:bg-cyan-300' />
              <h2 className='ml-2'> (Very Good)</h2>
            </div>
          
          </div>

          <div className='flex flex-col text-xl lg:text-2xl pb-5'>

            <div className='flex pl-2'>
              <SiGoogleclassroom className='m-0.5' />
              <h2> Classroom Technology</h2>
            </div>

            <div className='flex'>
              <input type='range' min="0" max="100" value={csTechnology} readOnly 
              className='ml-3 mt-4 w-40 md:w-60 h-2 rounded-full
              appearance-none dark:bg-cyan-300' />
              <h2 className='ml-2'> (Excellent)</h2>
            </div>
          
          </div>
          </div>

        </div>
        </div>

        <h1 className='text-3xl md:text-4xl pb-10 text-cyan-300 text-center pt-20'>Personal Skills</h1>
        <div className='flex flex-col text-cyan-300'> {/* Sub Container2 */}

          <div className='flex justify-around pb-16'>
          <div className='w-52 flex flex-col'>
            <FaPeopleGroup className='text-4xl md:text-6xl mx-auto' />
            <h2 className='md:text-3xl text-center'>Team Working</h2>
          </div>

          <div className='w-52 flex flex-col'>
            <GrMultiple className='text-3xl md:text-6xl mx-auto' />
            <h2 className='md:text-3xl text-center'>Multitasking</h2>
          </div>

          <div className='w-52 flex flex-col'>
            <TiFlowSwitch className='text-3xl md:text-6xl mx-auto' />
            <h2 className='md:text-3xl text-center'>Flexible</h2>
          </div>

          <div className='w-52 flex flex-col'>
            <IoExtensionPuzzle className='text-3xl md:text-6xl mx-auto' />
            <h2 className='md:text-3xl text-center'>Problem-Solving</h2>
          </div>
          </div>

          <div className='flex justify-around'>
          <div className='w-52 flex flex-col'>
            <SiAwsorganizations className='text-3xl md:text-6xl mx-auto' />
            <h2 className='md:text-3xl text-center'>Well-Organized</h2>
          </div>

          <div className='w-72 flex flex-col'>
            <FaComments className='text-3xl md:text-6xl mx-auto' />
            <h2 className='md:text-3xl text-center'>Strong communication and responding skills</h2>
          </div>

          <div className='w-52 flex flex-col'>
            <SiSololearn className='text-3xl md:text-6xl mx-auto' />
            <h2 className='md:text-3xl text-center'>Hungry Learning</h2>
          </div>
          </div>

        </div>

      </div>

      <div id='Projects' className='pt-20 w-full bg-[#182659] rounded-[50px]'> {/* 5th Container */}
        <h1 className='pt-7 text-4xl md:text-7xl text-center pb-10'>My Projects</h1>

        <h2 className='pt-8 pb-8 text-3xl md:text-5xl text-center'>Teaching</h2> {/* Sub Container1 */}
        <div className='flex lg:justify-around justify-center items-center
        flex-col lg:flex-row text-slate-900'>

          <a href='https://rami-abdulkarim.github.io/English-Acts/'>
            <div className='w-[300px] h-[420px] bg-white rounded-[10px] transition-all hover:scale-110
            duration-500 cursor-pointer mb-10 lg:mb-0'>
              <img src={EnglishActs} alt="English Activities Website"
              className='mx-auto h-[230px]' /><hr className='h-2 bg-[#182659]' />
              <h2 className='text-xl md:text-2xl text-center font-bold'>English Activities Website</h2>
              <p className='text-justify text-sm md:text-md px-3'>This website is a handy tool
              for doing English activities regarding grammar, listening,  
              and reading. Equipped with colorful visuals and engaging sounds, it's
              a modern option to do classroom activities in both educational and engaging ways.
              </p>
            </div>
          </a>

          <a href='https://1drv.ms/p/s!AvB9qsbd5j95glxRxgSMxgtMS2lL?e=ahoync'>
            <div className='w-[300px] h-[420px] bg-white rounded-[10px] transition-all hover:scale-110
            duration-500 cursor-pointer mb-10 lg:mb-0'>
              <img src={PPT} alt="A sample PPT"
              className='mx-auto h-[230px]' /><hr className='h-2 bg-[#182659]' />
              <h2 className='text-xl md:text-2xl text-center font-bold'>Simple Past Tense PPT</h2>
              <p className='text-justify text-sm md:text-md px-3'>This powerpoint is
              one of my works that targets teaching simple past in a neat and stylish way.
              If you are interested to see more, kindly contact me.
              </p>
            </div>
          </a>

          <a href='https://1drv.ms/w/s!AvB9qsbd5j95gl8eFiG9Mb7Tcr8m?e=UQQrwm'>
            <div className='w-[300px] h-[420px] bg-white rounded-[10px] transition-all hover:scale-110
            duration-500 cursor-pointer mb-10 lg:mb-0'>
              <img src={LessonPlan} alt="A sample Lesson Plan"
              className='mx-auto h-[230px]' /><hr className='h-2 bg-[#182659]' />
              <h2 className='text-xl md:text-2xl text-center font-bold'>Sample Lesson Plan</h2>
              <p className='text-justify text-sm md:text-md px-3'>This lesson plan is one of my
              works that shows my skills in planning sessions. I care about achieving flexibility,
              differentiated learning, and, of course, avoiding boredom.
              </p>
            </div>
          </a>

        </div>

        <h2 className='pt-8 pb-8 text-3xl md:text-5xl text-center'>Programming</h2> {/* Sub Container2 */}
        <div className='flex lg:justify-around justify-center items-center
        flex-col lg:flex-row text-slate-900'>

          <a href='https://rami-abdulkarim.github.io/English-Acts/'>
            <div className='w-[300px] h-[420px] bg-white rounded-[10px] transition-all hover:scale-110
            duration-500 cursor-pointer mb-10 lg:mb-0'>
              <img src={EnglishActs} alt="English Activities Website"
              className='mx-auto h-[230px]' /><hr className='h-2 bg-[#182659]' />
              <h2 className='text-xl md:text-2xl text-center font-bold'>English Activities Website</h2>
              <p className='text-justify text-sm md:text-md px-3'>Talking about programming,
              this website shows my strengths in programming field and website management.
              Coded with React JS, this website serves a smooth experience with lively and
              interactive UI. (Source code is in my Github page)
              </p>
            </div>
          </a>

          <a href='https://rami-abdulkarim.github.io/Calculator/'>
            <div className='w-[300px] h-[420px] bg-white rounded-[10px] transition-all hover:scale-110
            duration-500 cursor-pointer mb-10 lg:mb-0'>
              <img src={Calculator} alt="A Calculator"
              className='mx-auto h-[230px]' /><hr className='h-2 bg-[#182659]' />
              <h2 className='text-xl md:text-2xl text-center font-bold'>Calculator App</h2>
              <p className='text-justify text-sm md:text-md px-3'>A classic, yet creative
              calculator that's equipped with an elegant CSS styles that can do all basic
              calculation operations.
              </p>
            </div>
          </a>

          <a href='https://rami-abdulkarim.github.io/mrma-fashion/'>
            <div className='w-[300px] h-[420px] bg-white rounded-[10px] transition-all hover:scale-110
            duration-500 cursor-pointer mb-10 lg:mb-0'>
              <img src={mrma} alt="mrma fashion Website"
              className='mx-auto h-[230px]' /><hr className='h-2 bg-[#182659]' />
              <h2 className='text-xl md:text-2xl text-center font-bold'>mrma Fashion Website</h2>
              <p className='text-justify text-sm md:text-md px-3'>A virtual website created to
              simulate my abilities in styling websites that requires complex styling format. 
              The neat and unique styling gives the website a sweet looking. Notice that there's no such 
              company named "mrma".
              </p>
            </div>
          </a>

        </div>

        <h2 className='pt-8 pb-8 text-3xl md:text-5xl text-center'>Engineering</h2> {/* Sub Container3 */}
        <div className='flex lg:justify-around justify-center items-center
        flex-col lg:flex-row text-slate-900 pb-10 md:pb-20'>

          <a href='https://drive.google.com/file/d/1XUG-iZRGIDwdhYb69txKYT1B4Mm2tQR-/view?usp=drive_link'>
              <div className='w-[300px] h-[420px] bg-white rounded-[10px] transition-all
              hover:scale-110 duration-500 cursor-pointer mb-10 lg:mb-0'>
                <img src={SamplePlan} alt="A sample civil plan"
                className='mx-auto h-[230px] rounded-[10px]' /><hr className='h-2 bg-[#182659]' />
                <h2 className='text-xl md:text-2xl text-center font-bold'>Sample House Plan PDF</h2>
                <p className='text-justify text-sm md:text-md px-3'>This PDF shows you one of my
                self drawn plans. It shows a combination of beuty and creativity in it's design
                If you are interested about seeing more plans, kindly contact me.
                </p>
              </div>
          </a>

          <a href='https://drive.google.com/file/d/1HFUn5Avi_tFKMFyRrKx0Sg72rqt_OboD/view?usp=drive_link'>
              <div className='w-[300px] h-[420px] bg-white rounded-[10px] transition-all
              hover:scale-110 duration-500 cursor-pointer mb-10 lg:mb-0'>
                <img src={B1Layer} alt="A sample bottom1 layer"
                className='mx-auto h-[230px] rounded-[10px]' /><hr className='h-2 bg-[#182659]' />
                <h2 className='text-xl md:text-2xl text-center font-bold'>Sample Bottom1 Reinforcement
                Layer PDF</h2>
                <p className='text-justify text-sm md:text-md px-3'>This PDF shows you a real steel
                reinforcement Bottom 1 layer taking in consideration the steps and drop panels.
                Kindly contact me if you want to see more of these.
                </p>
              </div>
          </a>

          <a href='https://drive.google.com/file/d/1dMMULKTUaOF8LdjzbfPyiGXRHSHUF0F1/view?usp=drive_link'>
              <div className='w-[300px] h-[420px] bg-white rounded-[10px] transition-all
              hover:scale-110 duration-500 cursor-pointer mb-10 lg:mb-0'>
                <img src={B2Layer} alt="A sample bottom2 layer"
                className='mx-auto h-[230px] rounded-[10px]' /><hr className='h-2 bg-[#182659]' />
                <h2 className='text-xl md:text-2xl text-center font-bold'>Sample Bottom2 Reinforcement
                Layer PDF</h2>
                <p className='text-justify text-sm md:text-md px-3'>This PDF shows you a real steel
                reinforcement Bottom 2 layer taking in consideration the steps and drop panels. 
                Kindly contact me if you want to see more of these.
                </p>
              </div>
          </a>

        </div>

      </div>

      <div id='Contact' className='bg-[#111]'> {/* 6th Container */}
        <h1 className='text-2xl md:text-4xl pl-5 pt-5'>Contact me</h1>
        <div className='text-sm md:text-xl pl-5 py-5'>
          <ul className='leading-8'>
            <li>Full Name: Rami Yasser Abed Al Karim</li>
            <li>Email: ramiabdulkarim0@gmail.com</li>
            <li>Secondary Email: ramiabdulkarim27@gmail.com</li>
            <li>Mobile: +96171542702</li>
          </ul>
        </div>
        <hr />
        <div className='pt-5 text-xl md:text-4xl flex justify-center gap-10 md:gap-20 cursor-pointer'>
          <a href='https://www.facebook.com/rami.abdulkarim.39'>
            <FaFacebook />
          </a>
          <a href='https://www.linkedin.com/in/rami-abdulkarim-446b80245/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B2N6bA9uFRuSTE%2FlT8H1sVg%3D%3D'>
            <FaLinkedin />
          </a>
          <a href='https://wa.link/cjwzm6'>
            <FaWhatsapp />
          </a>
          <a href='https://github.com/Rami-Abdulkarim'>
            <FaGithub />
          </a>
        </div>
        <h2 className='py-5 md:text-xl text-center'>@Rami's Portfolio</h2>
      </div>

    </div>
  );
};

export default App;
