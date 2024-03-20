import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { deleteProduct, findProducts } from '../../State/Product/Action'
import { useDispatch, useSelector } from 'react-redux'

const ProductsTable = () => {
const dispatch=useDispatch();
const {products}=useSelector(store=>store);
console.log("products--->",products);

const handleProductDelete=(productId)=>{
  dispatch(deleteProduct(productId))
}


useEffect(()=>{
  const data = {
    category: "",
    colors:  [],
    sizes:  [],
    minPrice:0,
    maxPrice:1000000,
    minDiscount:  0,
    sort: "price_low",
    pageNumber: 0,
    pageSize: 10,
    stock: "",

}
console.log("sending data to Action.js:",data);
dispatch(findProducts(data))
},[products.deletedProduct])

  return (
    <div className='p-5'>
      <Card className='mt-2'>
         <CardHeader title="All Products"/>
          <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Product Image</TableCell>
            <TableCell>Product Title</TableCell>
            <TableCell align="left">Product Id</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.products?.content?.map((item) => (
            <TableRow
             // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell allign="right">
                 <Avatar src={item.imageUrl}></Avatar>
              </TableCell>
             
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              
              <TableCell align="left">{item.id}</TableCell>
              <TableCell align="left">{item.category.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">
                <Button onClick={()=>handleProductDelete(item.id)} variant='outlined'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </Card>
      
    </div>
  )
}

export default ProductsTable