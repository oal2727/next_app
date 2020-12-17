import React from 'react'
import NavbarComponent from '../Menu/NavbarComponent'
import Card from 'react-bootstrap/Card'
import {Button,Badge,Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ListPedido =()=>{
    return(
        <NavbarComponent>
            <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Buscar Nombre del cliente" />
            <Badge pill variant="primary">
                        Liquidos
            </Badge>{' '}
            </Form.Group>
            <Button variant="warning" style={{marginTop:10}}>Buscar</Button>{' '}
            <Card style={{ width: 300 }}>
                <Card.Header>
                <Badge pill variant="primary">
                        Pedido #1
                    </Badge>{' '}
                </Card.Header>
                <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Agua Cielo</Card.Title>
                <Card.Text>
                            <Button variant="primary" style={{marginTop:10}}>Edit</Button>
                        <Button variant="danger" style={{marginLeft:15}}>Delete</Button>
                </Card.Text>
                <Row>
                   <Col>
                   <Badge variant="success">Cantidad : 5</Badge>{' '}
                   </Col>
                </Row>
                </Card.Body>
            </Card>
        </NavbarComponent>
    )
}
//obsoleto getInitialProps
//uso actualmente 
// Recomendado: getStaticProps o getServerSideProps Si usa Next.js 9.3 o posterior,
// le recomendamos que use getStaticProps o getServerSideProps en lugar de 
//getInitialProps

// ListPedido.getInitialProps=(ctx)=>{
//     console.log(data)
//     return {datos:data}

// }

export default ListPedido
//filtrado de datos por nombre de cliente
//badge nombre del cliente elegir


//finalmente 
//animaciones:
// - framermotion 
// -crud mongoose react
// -logica react pedidos 
// -click on badges show nombres on input and cancel names
// hacer lo que puedo .

//proyectos mas adelantes