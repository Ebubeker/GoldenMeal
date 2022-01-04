import React from 'react';
import {container, box, content, applyBtn, jobTitle, jobDesc} from './JobList.module.css';
import { jobs } from '../staticData/jobs';

const JobList = () => {
    return (
        <div className={container}>
            {jobs.map((job)=>(
                <div className={box}>
                    <div className={content}>
                        <p className={jobTitle}>{job.name}</p>
                        <p className={jobDesc}>{job.description}</p>
                    </div>
                    <button className={applyBtn}>Apply</button>
                </div>
            ))}
        </div>
    )
}

export default JobList;
