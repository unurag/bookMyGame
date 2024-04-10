import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Homepage from './Homepage/Homepage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
