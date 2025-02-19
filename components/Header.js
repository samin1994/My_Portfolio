import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {

    // dark mode on off
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // get dark mode preference from local storage on initial load
        const isDarkMode = localStorage.getItem('darkMode') === true;
        setDarkMode(isDarkMode);
    }, [])

    useEffect(() => {
        // apply dark mode styles when dark mode state changes
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', true);
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', false);
        }
    }, [darkMode])

    // toggle dark mode function
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    //active
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setClicked(false);
    }

    useEffect(() => {
        // update active link state when page is reloaded
        setActiveLink(router.pathname);
    }, [router.pathname]);


    // mobile navbar 
    const [mobile, setMobile] = useState(false);

    // open
    const handleMobileOpen = () => {
        setMobile(!mobile);
    }

    // close 
    const handleMobileClose = () => {
        setMobile(false);
    }

    return <>
        <header>
            <nav className="container flex flex-sb">
                <nav className="logo flex gap-2">
                    <Link href="/"><h1>S.L</h1></Link>
                    <h2>Labbafsamin@gmail.com</h2>
                </nav>
                <div className="navlist flex gap-2">
                    <ul className="flex gap-2">
                        <li><Link href="/" onClick={() => handleLinkClick('/')} className={activeLink === '/' ? "active" : ""}>Home</Link></li>
                        <li><Link href="/projects" onClick={() => handleLinkClick('projects')} className={activeLink === '/projects' ? "active" : ""}>Projects</Link></li>
                        <li><Link href="/contact" onClick={() => handleLinkClick('/contact')} className={activeLink === '/contact' ? "active" : ""}>Contact</Link></li>
                    </ul>
                    <div className="darkmodetoggle" onClick={() => toggleDarkMode()}>
                        {darkMode ? <IoMoonSharp /> : <LuSun />}
                    </div>
                    {/* <button><Link href={'/contact'}>Hire Me!</Link></button> */}
                    <div className="mobiletogglesvg" onClick={handleMobileOpen}>
                        <HiMiniBars3BottomRight />
                    </div>
                </div>
                <div className={mobile ? "mobilenavlist active" : "mobilenavlist"}>
                    <span className={mobile ? "active" : ""} onClick={handleMobileClose}></span>
                    <div className="mobilelogo">
                        <h2>Samin.L</h2>
                    </div>
                    <ul className="flex gap-1 flex-col flex-left mt-3" onClick={() => handleMobileClose()}>
                        <li><Link href="/" onClick={() => handleLinkClick('/')} className={activeLink === '/' ? "active" : ""}>Home</Link></li>
                        <li><Link href="/projects" onClick={() => handleLinkClick('projects')} className={activeLink === '/projects' ? "active" : ""}>Projects</Link></li>
                        <li><Link href="/contact" onClick={() => handleLinkClick('/contact')} className={activeLink === '/contact' ? "active" : ""}>Contact</Link></li>
                    </ul>
                    <p>Copyright &copy; 2025 | Samin Labbaf</p>
                </div>
            </nav>
        </header>

    </>
}