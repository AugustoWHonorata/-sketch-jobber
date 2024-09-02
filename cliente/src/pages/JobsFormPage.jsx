import { useForm } from "react-hook-form"
import { createJob, getJob, updateJob } from "../api/jobs.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import {Form, Button} from 'react-bootstrap';

function JobsFormPage() {
    const { register, handleSubmit, formState: {
        errors
    }, setValue } = useForm()
    const params = useParams()
    const navigate = useNavigate()
    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateJob(params.id, data);
            toast.success("Job Atualizado", {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        } else {
            await createJob(data);
            toast.success("Novo Job Adicionado", {
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        }
        navigate("/jobs");
    });
    useEffect(() => {
        async function loadJob() {
            if (params.id) {
                const { data } = await getJob(params.id);
                setValue("title", data.title);
                setValue("description", data.description);
                setValue("image_url", data.image_url);
            }
        }
        loadJob();
    }, []);


    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titulo do Job</Form.Label>
                <Form.Control type="text" placeholder="Titulo do Job"
                    {...register("title", { required: true })} />
                {errors.title && <span>Campo título é obrigatório!</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição do Job</Form.Label>
                <Form.Control rows="3" placeholder="Descrição do Job"
                    {...register("description", { required: true })} />
                {errors.description && <span>Campo descrição é obrigatório!</span>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Inserir Imagem</Form.Label>
                <Form.Control rows="3" placeholder="Insira a sua imagem"
                    {...register("image_url", { required: false })} />
            </Form.Group>
            <Button variant="outline-primary" type="submit" size="lg">Salvar</Button>
        </Form>
    )
}

export default JobsFormPage