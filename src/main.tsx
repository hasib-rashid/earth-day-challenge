import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@mantine/core/styles.css";
import './index.css'
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
    /* Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider theme={theme} defaultColorScheme='dark'>
            <App />
        </MantineProvider>
    </React.StrictMode>,
)
