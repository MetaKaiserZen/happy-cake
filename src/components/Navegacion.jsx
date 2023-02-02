import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Navegacion = () =>
{
    return (
        <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'rgb(255, 53, 70)' }}>
            <Container className="justify-content-space-between" style={{ marginBlock: '0.5em' }}>
                <div>
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        &#127968; Home
                    </Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">
                        &#128210; Contacto
                    </Link>
                </div>
                <Link to="/" className="text-white ms-3 text-decoration-none">
                    &#127856; Happy Cake
                </Link>
            </Container>
        </Navbar>
    );
}

export default Navegacion
