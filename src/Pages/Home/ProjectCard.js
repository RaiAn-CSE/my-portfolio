import React from 'react';

const ProjectCard = ({ project }) => {
    const { name, description, img, liveLink, clientSide, serverSide, github } = project;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900">
                            Live Link
                        </button>
                    </a>
                    <a href={clientSide} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900">
                            Git Client
                        </button>
                    </a>
                    <a href={serverSide} target="_blank" rel="noopener noreferrer">
                        <button type="button" className="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900">
                            Git Server
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;