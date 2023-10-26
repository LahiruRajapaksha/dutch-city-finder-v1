import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
