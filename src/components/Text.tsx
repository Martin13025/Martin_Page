import "./Text.css";
import avatar from "../assets/115161917.png";
import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiVite,
    SiReact,
    SiMysql,
    SiWordpress,
    SiGit,
    SiLighthouse,
    SiE,
    SiGithub,
    SiOpenai,
    SiGoogleanalytics,
    SiVercel,
    SiPostman
} from "react-icons/si";


import { FaTools } from "react-icons/fa";

export const Text = () => {
    return (
        <div className="transparent">
            <img src={avatar} alt="avatar" className="avatar" />
            <h2>Martin Daniels</h2>
            <h3>[React Developer | SEO Specialist | Systems Analyst | AI Prompt Engineer]</h3>
            <ul>
                <li>
                    <SiHtml5 color="#E34F26" /> HTML
                </li>
                <li>
                    <SiCss3 color="#1572B6" /> CSS
                </li>
                <li>
                    <SiSass color="#CC6699" /> SASS
                </li>
                <li>
                    <SiJavascript color="#F7DF1E" /> JavaScript
                </li>
                <li>
                    <SiTypescript color="#3178C6" /> TSX
                </li>
                <li>
                    <SiVite color="#646CFF" /> Vite
                </li>
                <li>
                    <SiReact color="#61DAFB" /> React
                </li>
                <li>
                    <SiMysql color="#4479A1" /> MySQL
                </li>
                <li>
                    <SiWordpress color="#21759B" /> WordPress
                </li>
                <li>
                    <SiGit color="#F05032" /> Git
                </li>
                <li>
                    <SiLighthouse color="#F44B21" /> Lighthouse
                </li>
                <li>
                    <SiGithub color="#FFFFFF" /> GitHub
                </li>
                <li>
                    <SiOpenai color="#2C9C5E" /> AI Prompt Engineering
                </li>
                <li>
                    <SiE color="#0A66C2" /> SEO Optimization
                </li>
                <li>
                    <SiGoogleanalytics color="#F4B400" /> Google Analytics
                </li>
                <li>
                    <SiPostman color="#FF6C37" /> Postman
                </li>
                <li>
                    <FaTools color="#FB7A24" /> XAMPP
                </li>
            </ul>
            <hr />
            <h2>My Projects</h2>
            <ul>
                <li>
                    <SiVercel />
                    <a
                        href="https://vercel.com/martin13025s-projects"
                        style={{
                            textDecoration: "none",
                            color: "white",
                            transition: "color 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#ccc")}
                        onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                    >
                        Vercel
                    </a>
                </li>
            </ul>
        </div>
    );
};
