import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from '../lib/projects';

// new Set()

const categories = [...new Set(projects.map(x => x.category)), true];


/*
    let arrOfObj = [
        {
            x: 1
        },
        {
            x: 1
        },
        {
            x: 1
        },
        {
            x: 2
        }
    ]

    let arrOfNums = arrOfObj.map(x => x.x)
        [1, 1, 1, 2]

    let set = new Set(arrOfNums)
        Set [1, 2]

    let arr = [...set]


    - set up some state for our "shown projects"
    - buttons should have click handlers which filter out the matching projects

    filter( (arrayItem, arrayIndex) => { return Boolean } )
*/

const Home = () => {

    /*
        () => { return x }
        () => x
    */

    const filterProjects = catName => projects.filter(project => {
        return project.category == catName || catName === true
    })
    const [cat, setCat] = useState(filterProjects(categories[0]));

    /*
        const filterProjects = (catName) => {
            let filteredProjects = projects.filter((project) => {
                return project.category === catName
            })
            return filteredProjects
        }

        1. pass in the new value
            setState(2)
        2. pass in a callback which provides the currentValue
            setState(current => current+1)


        when we invoke a function, we get the return value
        
        function myFn () { return 5 }

        console.log(myFn())     ->  5
        console.log(myFn)       -> Function myFn
    */


    const hi = () => {
        console.log("Hello");
    }

    const callbk = () => {
        console.log("do something");
    }


    return (
        <>
            <div>
                {categories.map((category, i) => (
                    <button key={`${category}${i}`} onClick={() => { setCat(filterProjects(category)) }}>
                        {typeof category == 'string' ? category : 'all'}
                    </button>
                ))}
            </div>
            Home page
            <div className="projects">
                {cat.map((project) => {
                    return (
                        <ProjectCard key={project.header} project={project} />
                    )

                })}
            </div>
        </>
    )

}

export default Home;
