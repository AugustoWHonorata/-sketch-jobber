import axios from 'axios'

const JobsApi = axios.create({
    baseURL: 'http://localhost:8000/jobs/api/v1/jobs/'
}
)
export const getAllJobs = () => {
    return JobsApi.get('/')
}
export const getJob = (id) => JobsApi.get(`/${id}`);
export const createJob = (job) => {
    return JobsApi.post('/', job)
}

export const deleteJob = (id) => JobsApi.delete(`/${id}/`);
export const updateJob = (id, job) => JobsApi.put(`/${id}/`, job);
