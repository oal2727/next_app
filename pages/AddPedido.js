import React from 'react'
import NavbarComponent from '../Menu/NavbarComponent'
import {Card,Form,Button,Row,Col} from 'react-bootstrap'
import TablePedido from '../components/TablePedido'
import {useForm} from 'react-hook-form'
import Peticion from '../Api/Peticion'

const AddPedido =()=>{
    //arreglo categorias
    const {register,handleSubmit,setValue} = useForm()
    const categorias=[
        {id:1,value:'Lacteos',nombre:'Lacteos',promocion:'0.08%'},
        {id:2,value:'Embutidos',nombre:'Embutidos',promocion:'0.05%'},
        {id:3,value:'Liquidos',nombre:'Liquidos',promocion:'0.06%'}
    ]
    //variable categoria 
    const [categoria,setCategoria] = React.useState("Lacteos") 
    //variable producto
    //variable de precio
    //arreglo productos

    const handleCategoria =(e)=>{
        setCategoria(e.target.value)
    }
    //crear una nueva instanciar mediante register y set value

    const onSubmit = (values)=>{
        console.log(values)
        Peticion.AddPedido(values).then(e => {
            console.log(e)
        })
    }

    //costo total => cantidad * precio * promocion si existe
    //seleccion nombre producto => muestra precio del producto

    return(
        <NavbarComponent>
            <Row>
                <Col lg={6} md={12}>
                    <Card style={{margin:'auto',width:350}}>
                    <Card.Header>
                        Add Pedido
                    </Card.Header>
                    <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select"
                        name="categoria"
                        ref={register}
                        value={categoria}
                        onChange={handleCategoria}>
                        {
                            categorias.map((item)=> (
                            <option key={item.id} value={item.id}>{item.nombre}</option>
                            ))
                        }
                        </Form.Control>
                    </Form.Group>
              
                 
                    <Form.Group controlId="exampleForm.ControlSelect5">
                        <Form.Label>Nombre Producto</Form.Label>
                        <Form.Control type="text" name="nombre" ref={register} placeholder="Nombre producto" />
                    </Form.Group>
                 
                    
                    <Form.Group controlId="exampleForm.ControlSelect5">
                        <Form.Label>Precio Producto</Form.Label>
                        <Form.Control type="number" name="precio" ref={register} placeholder="Precio producto" />
                    </Form.Group>
                
                
                    <Form.Group controlId="exampleForm.ControlSelect5">
                        <Form.Label>Cantidad Producto</Form.Label>
                        <Form.Control type="number" name="cantidad" ref={register} placeholder="Cantidad producto" />
                    </Form.Group>
                    
               
                <Button type="submit" variant="primary">Add Pedido</Button>
                </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
           
        </NavbarComponent>
    )
}
export default AddPedido