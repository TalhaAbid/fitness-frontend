import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import AllowNumbers from './components/Weight';

ReactDOM.render(
	<ChakraProvider>
		<BrowserRouter>
			<App />
			<AllowNumbers />
		</BrowserRouter>
	</ChakraProvider>
	,
	document.getElementById('root')
);
