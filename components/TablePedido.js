import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const TablePedido = ({categorias})=>{
  
    return(
                <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Nombre Categoria</th>
            <th>Promocion</th>
            </tr>
        </thead>
        <tbody>
            {
                categorias.map((item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                   <td>{item.nombre}</td>
                    <td>{item.promocion}</td>
                    </tr>
                ))

            }
        </tbody>
        </Table>
    )
}
export default TablePedido