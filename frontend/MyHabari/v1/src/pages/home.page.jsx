import React from 'react';
import {Grid,GridItem,Show} from '@chakra-ui/react'

import { useSelector } from 'react-redux';

//import layouts
import Header from '../layout/header.Layout';
import Footer from '../layout/footer.Layout';
import SidbarLayout from '../layout/sidebar.layout';
import MainLayout from '../layout/main.layout';

const HomePage = () => {
  return( 
   <>
   <Grid
   templateAreas={{ base:`"nav" "main" `, md: ` "nav nav" "sidebar main"`}}
   templateColumns={{
    base:'1fr',
    md:'1fr 3fr'
   }}
  > 

<GridItem area="nav" >
  <Header/>
</GridItem>

<Show above='md'>
  <GridItem area="sidebar">
    <SidbarLayout/>
  </GridItem>

</Show>

<GridItem area="main">

<MainLayout/>

</GridItem>
   </Grid>
   </>
);
}

export default HomePage;