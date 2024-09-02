import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export function Navigation() {
    return (
        <div >
            <Link to="/jobs">
                <Button variant="outline-primary" type="submit" size="lg">Listar Jobs</Button>
            </Link>

            <Link to="/jobs-create">
                <Button variant="outline-primary" type="submit" size="lg">Criar Jobs</Button>
            </Link>

        </div>
    );
}
