import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import climate_app from "../../public/img/climate_app.png";
import dr_safdarian from "../../public/img/dermatology_clinic.png";

export default function projectslug() {

    const [project, setProject] = useState(null)

    const projects = [
        {
            title: "Dr Safdarian Clinic",
            description: "I designed high-fidelity pages for Dr. Negin Safdarian's clinic using Figma, followed by developing a responsive website with Next.js and Material UI. The site is optimized for SEO with semantic HTML and server-side rendering (SSR), ensuring faster load times and enhanced search engine visibility.",
            link: "https://www.neginsafdarian.com",   // broken url 
            image: dr_safdarian,
            category: "code & design",
            skills: ["Figma", "Next.js", "Material UI"],
            date: "April 2023",
            slug: "dr-safdarian-clinic",
            // designLink: "https://www.figma.com/file/your-figma-link" // replace with your Figma link or screenshots
        },
        {
            title: "Climate App Design",
            description: "For ObsidianPulse, I designed a minimalist, accessible interface in Figma, focusing on intuitive navigation and clear visual hierarchy. I created interactive prototypes to showcase key features while considering accessibility through color contrast and legible typography. This project highlights my skills in Figma design and prototyping, ensuring an engaging, user-friendly experience.",
            image: climate_app,
            category: "design",
            skills: ["Figma", "Prototyping"],
            date: "December 2024",
            designLink: "https://www.figma.com/design/KjG4r7nzvuKjvHs3nBVYyP/Climate-App?node-id=12-2415&p=f&t=7TT0jy23jiXj6Or2-0",
            slug: "climate-app-design"
        }
    ]

    const router = useRouter()
    const { slug } = router.query;

    useEffect(() => {
        const tempProject = projects.find(project => project.slug === slug)
        setProject(tempProject)
    }, [slug])

    return <>
        <Head>
            <title>{slug}</title>
        </Head>

        {project && (<div className="projectslug">
            <div className="projectslugimg">
                <div className="container">
                    <div className="proslugimg">
                        <Image src={project.image} alt={project.title} />
                    </div>
                    <div className="projectsluginfo">
                        <div className="leftmainproinfo">
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>

                            {/* ----------------------------
                                CHANGED PART: Disabled Live Preview button with caption
                                ---------------------------- */}
                            {project.link && project.title === "Dr Safdarian Clinic" ? (
                                project.link && <a target="_blank" rel="noopener noreferrer" href={project.link}>Live Preview</a>
                            ) : (
                                project.link && <a target="_blank" rel="noopener noreferrer" href={project.link}>Live Preview</a>
                            )}
                            {/* ----------------------------
                                END CHANGED PART
                                ---------------------------- */}

                        </div>
                        <div className="rightmainproinfo">
                            <div>
                                <h3>Category</h3>
                                <h2>{project.category}</h2>
                            </div>
                            <div>
                                <h3>Skills Used</h3>
                                <h2>{project.skills.join(', ')}</h2>
                            </div>
                            <div>
                                <h3>Date</h3>
                                <h2>{project.date}</h2>
                            </div>
                            <div>
                                {project.designLink && (
                                    <>
                                        <h3>Links</h3>
                                        <h2>
                                            <a target="_blank" rel="noopener noreferrer" href={project.designLink}>
                                                <u>Figma / Screenshots</u>
                                            </a>
                                        </h2>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
    </>
}
