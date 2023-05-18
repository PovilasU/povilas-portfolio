import "../styles/projectcard.css";
import techs from "../lib/techs";
import TechIcon from "./TechIcon";

/*
    const projects = [
        {
            header: "",
            desc: "",
            tech: [
                {name:"html", id:1,logo:"url", descrtiop:"something"},
                {name:"css",id:2, logo:"url", descrtiop:"something"}
        },
        {
            header: "",
            tech: [
                {name: ""}
            ]
        }
    ]

    {projects.map(project => (
        <ProjectCard project={project}/>
    ))}

    let techs = {
        html: {
            description: "blah blah blah"
        },
        css: {
            description: "csscsdkjflasjkdfsd"
        }
    }

    import techs from 'lib/techs'

    function TechIcon ({ name }) {

        let tech = techs[name]

        return (
            <img className="tech-icon" src={`/images/icons/${name}.png`} />
        )
    }
*/

import { useState, useEffect } from 'react'

let loaded = false

const ProjectCard = ({ project }) => {
    const {
        header,
        desc,
        techList
    } = project;

    let [noItems, setNoItems] = useState(window.innerWidth < 640 ? 7 : 9)

    /*
        {
            a: 1,
            b: 2
        }

        obj.a
        obj["a"]
    */

    // let car = {
    //     model: 'ford focus',
    //     drive: () => {
    //         console.log(`The ${this.model} is driving.`)
    //     }
    // }

    // car.drive()

   const resize = () => {
       let isMobile = window.innerWidth < 640;
       // console.log(isMobile);
       if (isMobile) {
           setNoItems(7)
        } else {
            setNoItems(9)
        }
    }
    
    useEffect(() => { 
        window.addEventListener('resize', resize)
    }, [])
    
    return (
        <div className="project-card">
            <h1>{header}</h1>

            <p>{desc} </p>

            <div className="five-images-grid">
                {techList.filter((item, index) => index < noItems).map((name, index) => {
                    return (
                        <TechIcon key={`${name}${index}`} tech={techs[name]} />
                    )
                })}

                {(techList.length && techList.length > noItems) && (<div className="techicon">
                    More cards: {techList.length - noItems}
                </div>)}
            </div>
        </div>
    )

}

export default ProjectCard;
