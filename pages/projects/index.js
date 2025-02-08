import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function projects() {

    const projects = [
        {
            title: "Dr Safdarian Clinic",
            description: "This is a description of project 1",
            link: "https://example.com/project1",
            image: "/img/dermatology_clinic.jpeg",
            category: "code",
            slug: "dr-safdarian-clinic"
        },
        {
            title: "Climate App Design",
            description: "This is a description of project 2",
            link: "https://example.com/project2",
            image: "/img/climate_app.png",
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


    return <>
        <Head>
            <title>Projects</title>
        </Head>
        <div className="projectpage">
            <div className="projects">
                <div className="container">
                    <div className="project_titles">
                        <h2>My Projects</h2>
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
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="procontentbox">
                                    <h2>{project.title}</h2>
                                    <GoArrowUpRight />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
}