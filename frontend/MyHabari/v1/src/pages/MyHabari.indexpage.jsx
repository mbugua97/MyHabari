// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import {Grid,GridItem,Show} from '@chakra-ui/react'
import MyHabari from './UsersManagement/Myhabari.page';
import SelectAuthenticationType from './UsersManagement/authenticationselect';

const IndexPage = () => {
  return (
    <div>
  <Grid
   templateAreas={{ base:`"main" `, md: `"side main "`}}
   templateColumns={{
    base:'1fr',
    md:'1fr 1fr'
   }}
  
  > 
<Show above='md'>
<GridItem area="side" >
<MyHabari/>
</GridItem>
</Show>

<GridItem area="main">

<SelectAuthenticationType/>

</GridItem>
   
   </Grid>
</div>
  );
};

export default IndexPage;
