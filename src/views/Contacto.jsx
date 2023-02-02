import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Contacto = () =>
{
    return (
        <Form className="m-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h2>Cuentanos, ¿en qué te podemos ayudar?</h2>
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="danger" type="submit">
                Enviar
            </Button>
        </Form>
    );
}

export default Contacto
