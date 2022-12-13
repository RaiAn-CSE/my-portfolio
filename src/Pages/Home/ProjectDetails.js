import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const productDetail = useLoaderData();
    console.log(productDetail);
    return (
        <div>
            <h2>Projects Details</h2>
        </div>
    );
};

export default ProjectDetails;