import './App.css'
import Page404 from "./pages/Page404.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.tsx";
import {DefaultLayout} from "./components/layout/DefaultLayout.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { theme } from './themes/main-theme.ts';
import { ThemeProvider } from '@mui/material';
import ProductsContextProvider from './contexts/products.context.tsx';
import Product from './pages/Product/Product.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            { path: 'products/:id', element: <Product /> },
            { path: '*', element: <Page404 /> },
        ],
    },
]);

function App() {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <ProductsContextProvider>
                    <Provider store={store}>
                        <RouterProvider router={Router} />
                    </Provider>
                </ProductsContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
