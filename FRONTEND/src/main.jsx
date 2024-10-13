import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';
import theme from './theme'; // Import your custom theme

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the app inside BrowserRouter */}
      <ChakraProvider theme={theme}> {/* ChakraProvider with custom theme */}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
