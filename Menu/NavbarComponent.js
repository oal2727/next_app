import React,{createContext,useReducer} from 'react'
import Head from 'next/head'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import {PedidoReducer} from '../reducers/Reducer'
import Peticion from '../Api/Peticion'

export const ReducerPedido = createContext()

const NavbarComponent =(props)=>{

    const initialState={
        todo:'',
        producto:[]
    }
    const [pedido,dispatch] = useReducer(initialState,PedidoReducer)

   React.useEffect(()=>{
        Peticion.GetPedido().then(e =>{
            console.log(e)
        })
   },[])


    return(

        <div>
            <Head>
                <title>Next pedidos</title>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous"
                    />
            </Head>
             <Navbar bg="light" variant="light">
                 <Link href="/">
                 <Navbar.Brand>Navbar</Navbar.Brand>
                 </Link>
           
            <Nav className="mr-auto">
               
                <Link href="/ListPedido">
                    <Nav className="mr-5">Listar Pedidos</Nav>
                </Link> 
                <Link href="/AddPedido">
                    <Nav>Add Pedidos</Nav>
                </Link> 
            </Nav>
        </Navbar>
            <Container className="p-4">
                <ReducerPedido.Provider state={{pedido}}>
                  {props.children}
                </ReducerPedido.Provider>
            </Container>
        </div>
    )
}
export default NavbarComponent