import { useEffect, useState } from "react";
import { getAllJobs } from "../api/jobs.api";
import JobsCard from "./JobsCard";

function JobsList() {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        async function loadJobs() {
            const res = await getAllJobs()
            setJobs(res.data)
        }
        loadJobs()
    }, [])

    return (
        <div>
            {jobs.map(job =>
                <JobsCard key={job.id} job={job} />
            )
            }
        </div>
        )
}

export default JobsList