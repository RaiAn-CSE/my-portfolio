import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
// import { useLoaderData } from 'react-router-dom';

const Projects = () => {
    // const projectsData = useLoaderData();
    // console.log(projectsData);

    const [projectData, setProjectData] = useState([]);
    // console.log(projectData);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjectData(data))
    }, []);

    return (
        <div>
            <h2 className='text-2xl text-center my-6 font-bold'>My Projects</h2>
            <div className='grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projectData.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;