import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliverOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrderTable = () => {
  const dispatch = useDispatch();

  const { adminOrder } = useSelector(store => store);

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event,index) => {
    const newAnchorE1Array=[...anchorEl]
    newAnchorE1Array[index]=event.currentTarget
    setAnchorEl(newAnchorE1Array);
  };
  const handleClose = (index) => {
    const newAnchorE1Array=[...anchorEl]
    newAnchorE1Array[index]=null
    setAnchorEl(newAnchorE1Array);
  };
  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered,adminOrder.deletedOrder])
  console.log(adminOrder);

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId))
    handleClose();
  }

  const handleconfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId))
    handleClose()
  }


  const handledeliverOrder = (orderId) => {
    dispatch(deliverOrder(orderId))
    handleClose();
  }


  const handledeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId))
  }

  return (
    <div className='p-5'>
      <Card className='mt-2'>
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order Image</TableCell>
                <TableCell>Order Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell allign="right">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>{item.orderItems.map((orderItem) => <Avatar src={orderItem.product.imageUrl}></Avatar>)}</AvatarGroup>
                    {/* <Avatar src={item.imageUrl}></Avatar> */}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    {item.orderItems.map((orderItem) => <p>{orderItem.product.title}</p>)}
                    {/* {item.title} */}
                  </TableCell>

                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left"><span className={` text-white px-5 py-2 rounded-full ${item.orderStatus == "CONFIRMED" ? "bg-[#F3B431]" :
                    item.orderStatus == "SHIPPED" ? "bg-[#0A79DF]" :
                      item.orderStatus == "PENDING" ? "bg-[#F3B431]" :
                        item.orderStatus == "PLACED" ? "bg-[#2ecc72]" :
                          "bg-[red]"}`}>{item.orderStatus}</span></TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"

                      aria-haspopup="true"

                      onClick={(event)=>handleClick(event,index)}
                      aria-controls={`basic-menu-${item.id}`} aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleconfirmedOrder(item.id)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item.id)}>Shipped Order</MenuItem>
                      <MenuItem onClick={() => handledeliverOrder(item.id)}>Delivered Order</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button onClick={() => handledeleteOrder(item.id)} variant='outlined' >Delete</Button>
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

export default OrderTable