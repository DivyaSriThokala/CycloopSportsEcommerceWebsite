import { Grid } from '@mui/material'
import React from 'react'
import Achievements from './Achievements'
import MonthlyOverview from './MonthlyOverview'
import ProductsTable from './ProductsTable'
import OrderTableView from '../View/OrderTableView'
import ProductsTableView from '../View/ProductTableView'

const AdminDasboard = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={3}>
        <Grid className='shadow-lg shadow-gray-400' item xs={12} md={4}>
          <Achievements />
        </Grid>
        <Grid className='shadow-lg shadow-gray-400' item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid className='shadow-lg shadow-gray-400' item xs={12} md={6}>
          <OrderTableView />
        </Grid>

        <Grid className='shadow-lg shadow-gray-400' item xs={12} md={6}>
          <ProductsTableView/>
        </Grid>

      </Grid>
    </div>
  )
}

export default AdminDasboard