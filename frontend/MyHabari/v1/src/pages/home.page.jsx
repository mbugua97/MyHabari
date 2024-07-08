import React from 'react';
import {Grid,GridItem,Show} from '@chakra-ui/react'

import Header from '../layout/header.Layout';
import Footer from '../layout/footer.Layout';

const HomePage = () => {
  return( 
   <>
   <Grid
   
   templateAreas={{ base:`"nav" "main" "footer"`, md: `"nav nav" "sidebar main" "footer footer"`}} 
   
   
   templateColumns={{
    base:'1fr',
    md:'400px 1fr'
   }}> 

<GridItem area="nav" >
  <Header/>
</GridItem>

<Show above='md'>
  <GridItem area="sidebar">
    <h2>this is my sidebar</h2>
  </GridItem>
</Show>


<GridItem area="main">
<h2>this is my main</h2>
</GridItem>


<GridItem area="footer">
  <Footer/>
</GridItem>


   </Grid>
   </>
);
}

export default HomePage;