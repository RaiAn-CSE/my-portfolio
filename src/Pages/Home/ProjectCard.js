import React from 'react';

const ProjectCard = ({ project }) => {
    const { name, description, img } = project;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Project Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;