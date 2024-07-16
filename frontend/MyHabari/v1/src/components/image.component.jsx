import React from 'react';

import {Img, Input, others} from '@chakra-ui/react'


import './image.component.css'

function ImageDisplayComponent({ src,height,width}) {
  return (
    <div>
        <Img src={src} height={height} width={width}/>
    </div>
  );
}
export default ImageDisplayComponent;
