import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { Capa } from "./pages/Capa";
import { theme } from "./styles/theme.js";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Capa />
  }
])

export function App() {
  return (
    <ThemeProvider theme={theme}>   
       <RouterProvider router={router} />
    </ThemeProvider>
  )
}
