import React from "react";
import ProjectCard from "./ProjectCard";
import projects from '../lib/projects';

const Home = () => {

    /*
        () => { return x }
        () => x
    */

    return (
        <>
            Home page
            <div className="projects">
                {projects.map((project) => {
                    return (
                        <ProjectCard key={project} project={project} />
                    )

                })}
            </div>
        </>
    )

}

export default Home;
