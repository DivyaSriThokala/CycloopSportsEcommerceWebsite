import { InboxIcon } from '@heroicons/react/24/outline';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router';

import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import AdminDashboard from './components/Dashboard';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductsForm from './components/CreateProductsForm';
import ProductsTable from './components/ProductsTable';
import OrderTable from './components/OrderTable';
import CustomerTable from './components/CustomerTable';


const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <ProductionQuantityLimitsIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <PersonIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingCartIcon /> },
    { name: "AddProduct", path: "/admin/product/create", icon: <AddIcon /> },
    { name: "", path: "" },
]

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <>
                {/* {isLargeScreen && <Toolbar />} */}
                <List>
                    {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>)}
                </List>
            </>


            <List>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <div className='relative'>
            <div className='relative flex h-[100vh] '>
                <CssBaseline />
                
                  <div className='w-[15%] border border-r-gray-300 h-full fixed top-0 right-[85%]'>
                    {drawer}
                  </div>

                    <div className='w-[85%] h-full ml-[15%]'>
                        <Routes>
                            <Route path='/' element={<AdminDashboard/>}></Route>
                            <Route path='/product/create' element={<CreateProductsForm />}></Route>
                            <Route path='/products' element={<ProductsTable />}></Route>
                            <Route path='/orders' element={<OrderTable />}></Route>
                            <Route path='/customers' element={<CustomerTable />}></Route>
                        </Routes>
                  </div>
            </div>
        </div>
    )
}

export default Admin