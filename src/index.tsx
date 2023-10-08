import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	components: {
		Table: {
			variants: {
				simple: {
					th: {
						borderColor: '#9a8866',
					},
					td: {
						borderColor: '#303030',
					},
				},
			},
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<ChakraProvider theme={ theme }>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ChakraProvider>,
);

