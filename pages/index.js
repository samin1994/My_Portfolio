import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { GoArrowUpRight } from 'react-icons/go';
import { LuMedal } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import me from '../public/img/me.png';
import Image from "next/image";
import next from '../public/img/nextjs.svg';
import reactjs from '../public/img/reactjs.svg';
import js from '../public/img/js.svg';
import typescript from '../public/img/typescript.svg';
import redux from '../public/img/redux.svg';
import sql from '../public/img/sql.svg';
import github from '../public/img/github.svg';
import vscode from '../public/img/vscode.svg';
import postman from '../public/img/postman.svg';
import figma from '../public/img/figma.svg';
import mui from '../public/img/mui.svg';
import dermatology_clinic from '../public/img/dermatology_clinic.jpeg';
import climate_app from '../public/img/climate_app.png';
// import resume from '../public/files/resume.pdf';

export default function Home() {

  // active service background color change
  const [activeIndex, setActiveIndex] = useState(0)

  const handleHover = (index) => {
    setActiveIndex(index);
  }

  const handleMouseOut = () => {
    setActiveIndex(0); // set active to first service
  }

  // services data
  const services = [
    {
      title: "Web Development",
      description: "I build modern, responsive, and user-friendly interfaces with Next.js and Material UI. Passionate about problem-solving and continuous learning, I’m always exploring new technologies to create high-quality, scalable solutions."
    },
    {
      title: "Web Design",
      description: "With Figma, I craft intuitive and visually appealing web experiences that blend aesthetics with functionality. I pay close attention to the details, ensuring every design feels polished, user-friendly, and aligned with client goals."
    },
  ];

  const projects = [
    {
      title: "Dr Safdarian Clinic",
      description: "This is a description of project 1",
      link: "https://example.com/project1",
      image: dermatology_clinic,
      category: "code",
      slug: "dr-safdarian-clinic"
    },
    {
      title: "Climate App Design",
      description: "This is a description of project 2",
      link: "https://example.com/project2",
      image: climate_app,
      category: "design",
      slug: "climate-app-design"
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    // filter projects based on selected category
    if (selectedCategory === 'all') {
      setFilteredProjects(projects)
    } else if (selectedCategory === 'code') {
      setFilteredProjects(projects.filter(project => project.category === 'code'))
    }
    else if (selectedCategory === 'design') {
      setFilteredProjects(projects.filter(project => project.category === 'design'))
    }
  }, [selectedCategory])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <Head>
        <title>Samin Labbaf Portfolio</title>
        <meta name="description" content="vbmcoder - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* hero section */}
      <section className="hero">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle" className="animate-stroke">HI</text>
          </svg>
        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <span className="hero_sb_title">I am Samin Labbaf</span>
              <h1 className="hero_title">Web Developer + <br /><span className="typed-text">UI Designer</span></h1>
              <div className="heroimgbox">
                <Image src={me} alt="me" />
              </div>
              <div className="lead">I’m a Web Developer specializing in Next.js, Material UI, and Figma. I create responsive, user-friendly interfaces and design intuitive, visually appealing web experiences that meet client needs.</div>
              <div className="hero_btn_box">
                <Link href='https://samin1994.github.io/My_Portfolio/files/resume.pdf' target="_blank" rel="noopener noreferrer" className="download_cv">Download CV<BiDownload /></Link>
                <ul className="hero_social">
                  <li><a target="_blank" href="https://www.linkedin.com/in/samin-labbaf"><GrLinkedinOption /></a></li>
                  <li><a target="_blank" href="https://github.com/samin1994"><FaGithub /></a></li>
                </ul>
              </div>
            </div>
            <div className="heroimageright">
              <div>
                <Image src={me} alt="me" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <div className="services_titles">
            <h2>My Quality Services</h2>
            <p>Creating modern, responsive websites with clean code, intuitive design, and a focus on great user experience.</p>
          </div>
          <div className="services_menu">
            {services.map((service, index) => (
              <div key={index} className={`services_item ${activeIndex === index ? 'sactive' : ''}`} onMouseOver={() => handleHover(index)}
                onMouseOut={handleMouseOut}>
                <div className="left_s_box">
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="right_s_box">
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <div className="container">
          <div className="project_titles">
            <h2>My Recent Projects</h2>
            <p>A collection of projects featuring my work in both web design and development, with separate categories for design and responsive development.</p>
          </div>
          <div className="project_buttons">
            <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => setSelectedCategory('all')}>All</button>
            <button className={selectedCategory === 'code' ? 'active' : ''} onClick={() => setSelectedCategory('code')}>Code</button>
            <button className={selectedCategory === 'design' ? 'active' : ''} onClick={() => setSelectedCategory('design')}>Design</button>
          </div>
          <div className="projects_cards">
            {filteredProjects.map((project, index) => (
              <Link key={index} href={`/projects/${project.slug}`} className="procard">
                <div className="proimgbox">
                  <Image src={project.image} alt={project.title} />
                </div>
                <div className="procontentbox">
                  <h2>{project.title}</h2>
                  <GoArrowUpRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience study */}
      <section className="exstudy">
        <div className="container flex flex-left flex-sb">
          <div className="experience">
            <div className="experience_title flex gap-1">
              <LuMedal />
              <h2>My Experience</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>Jun 2021 – Aug 2021</span>
                <h2>Ant Coders</h2>
                <p>Front-End Developer</p>
              </div>
              <div className="exper_card">
                <span>Jan 2021 – Apr 2021</span>
                <h2>Dexis Co</h2>
                <p>Front-End Developer</p>
              </div>
              <div className="exper_card">
                <span>Nov 2016 – Apr 2017</span>
                <h2>TOD Co</h2>
                <p>Back-End Developer Intern</p>
              </div>
            </div>
          </div>
          <div className="education">
            <div className="experience_title flex gap-1">
              <PiGraduationCap />
              <h2>My Education</h2>
            </div>
            <div className="exper_cards">
              <div className="exper_card">
                <span>Sep 2024 - Present</span>
                <h2>George Brown College, Toronto, Ontario</h2>
                <p>Web Development (Front-End Design) | Ontario College Graduate Certificate</p>
              </div>
              <div className="exper_card">
                <span>Jan 2021 – Apr 2021</span>
                <h2>Amirkabir University of Technology</h2>
                <p>Information Technology | Bachelor of Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills */}
      <section className="myskills">
        <div className="container">
          <div className="myskills_title">
            <h2>My Skills</h2>
            <p>Here’s what I bring to the table—React, Next.js, Material UI, Figma, and more—to build smooth, responsive, and user-friendly web experiences.</p>
          </div>
          <div className="myskils_cards">
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={next} alt="nextJS" />
              </div>
              <p className="text-center">NextJS</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={reactjs} alt="ReactJS" />
              </div>
              <p className="text-center">ReactJS</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={js} alt="javascript" />
              </div>
              <p className="text-center">JavaScript</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={typescript} alt="typescript" />
              </div>
              <p className="text-center">TypeScript</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={redux} alt="redux" />
              </div>
              <p className="text-center">Redux</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={sql} alt="SQL" />
              </div>
              <p className="text-center">SQL</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={github} alt="github" />
              </div>
              <p className="text-center">GitHub</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={vscode} alt="vs code" />
              </div>
              <p className="text-center">VS Code</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={postman} alt="Postman" />
              </div>
              <p className="text-center">Postman</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={figma} alt="Figma" />
              </div>
              <p className="text-center">Figma</p>
            </div>
            <div className="mys_card">
              <div className="mys_inner">
                <Image src={mui} alt="Material UI" />
              </div>
              <p className="text-center">Material UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="aboutMe">
        <div className="container">
          <div className="section_title" id="about">
            <h2>About Me</h2>
            <p>
              I’m <strong>Samin Labbaf</strong>, a front-end developer passionate about creating modern, responsive websites with seamless user experiences. I have <strong>over a year of experience</strong>, working with technologies like <strong>React, Next.js, and Material UI</strong>, and collaborating with big clients on various projects, including freelance work.
            </p>
            <p>
              Beyond coding, I enjoy <strong>dancing, playing the piano, biking</strong>, and spending time with <strong>cats</strong>. I’m also deeply interested in <strong>AI (mocking human behavior)</strong> and <strong>IoT</strong>, always eager to explore how these technologies can be leveraged to solve real-world problems.
            </p>
            <p>
              My ultimate goal is to start my own business based on my ideas, using an up-to-date tech stack that I have mastered over time. Driven by curiosity and a desire to innovate, I’m constantly learning and refining my skills to stay at the forefront of technology.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
