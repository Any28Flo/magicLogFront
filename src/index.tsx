import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

import { App } from "./App";
import { AppProvider } from "./context/appContext";

const queryClient = new QueryClient();



const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<AppProvider>
						<App />
					</AppProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode >
);
