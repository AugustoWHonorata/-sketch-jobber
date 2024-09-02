import toast from "react-hot-toast";
import { deleteJob } from "../api/jobs.api"
import {useNavigate } from "react-router-dom";
function JobsCard({ job }) {
    const navigate = useNavigate()
    const handleDelete = async () => {
        const accepted = window.confirm("Você tem certeza que quer deletar?");
        if(accepted){
            try {
                await deleteJob(job.id);
                toast.success("Job deletado com sucesso", {
                    position: "top-center",
                    style: {
                      background: "#101010",
                      color: "#fff",
                    },
                  });
                  navigate('/jobs')
            } catch (error) {
                toast.error("Erro ao tentar deletar Job", {
                    position: "top-center",
                    style: {
                      background: "red",
                      color: "#fff",
                    },
                  });
            }
        } else{
            return
        }
    };
    return (
        <div >
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <p>{job.create_date}</p>
            <img src={job.image_url} alt="" />
            <div>
                <button onClick={() => navigate(`/jobs/${job.id}/`)}>Editar</button>
                <button onClick={handleDelete}>Deletar</button>
            </div>
        </div>
    )
}

export default JobsCard