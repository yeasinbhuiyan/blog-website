import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";
import SectionTitle from "../../Shared/SectionTitle";

const Jobs = () => {
    const [allJobs, setAllJobs] = useState([])
    useEffect(() => {

        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, [])
    return (
        <div className="my-20">
            <SectionTitle heading={"Jobs"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-16">
            
                {
                    allJobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>

        </div>
    );
};

export default Jobs;