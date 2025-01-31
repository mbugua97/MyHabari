import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import store from './app/store/store.js'

import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>

     <ChakraProvider>
          <App />
    </ChakraProvider>


    </Provider> 
  </React.StrictMode>
)
