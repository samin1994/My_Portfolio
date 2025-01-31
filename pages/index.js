import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { GoArrowUpRight } from 'react-icons/go';

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
              <div className="hero_img_box heroimgbox">
                <img src="/img/me.png" alt="coder" />
              </div>
              <div className="lead">I’m a Web Developer specializing in Next.js, Material UI, and Figma. I create responsive, user-friendly interfaces and design intuitive, visually appealing web experiences that meet client needs.</div>
              <div className="hero_btn_box">
                <Link href='/' download={'/resume.pdf'} className="download_cv">Download CV<BiDownload /></Link>
                <ul className="hero_social">
                  <li><a target="_blank" href="https://www.linkedin.com/in/samin-labbaf"><GrLinkedinOption /></a></li>
                  <li><a target="_blank" href="https://github.com/samin1994"><FaGithub /></a></li>
                </ul>
              </div>
            </div>
            <div className="heroimageright">
              <div className="hero_img_box">
                <img src="/img/me.png" alt="coder" />
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
            <button>All</button>
            <button>Code</button>
            <button>Design</button>
          </div>
          <div className="projects_cards">
            <Link href='/' className="procard">
              <div className="proimgbox">
                <img src="/img/climate_app.png" alt="" />
              </div>
              <div className="procontentbox">
                <h2>Climate App Design</h2>
                <GoArrowUpRight />
              </div>
            </Link>
            <Link href='/' className="procard">
              <div className="proimgbox">
                <img src="/img/dermatology_clinic.jpeg" alt="" />
              </div>
              <div className="procontentbox">
                <h2>Dr Safdarian Clinic</h2>
                <GoArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience study */}
      <section className="exstudy">

      </section>

      {/* My Skills */}
      <section className="myskills">

      </section>

      {/* Recent Blogs */}
      <section className="recentblogs">

      </section>

    </>
  );
}
