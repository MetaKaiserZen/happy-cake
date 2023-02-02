import { Container } from 'react-bootstrap';

const Home = () =>
{
    return (
        <div style={{ textAlign: 'center' }}>
            <Container>
                <div style={{ margin: '2em' }}>
                    <h3>Bienvenido a <b>Happy Cake</b></h3>
                    <p>El lugar de los pasteles felices</p>
                    <p style={{ fontSize: '5em' }}>&#127874;</p>
                </div>
            </Container>
        </div>
    );
}

export default Home
