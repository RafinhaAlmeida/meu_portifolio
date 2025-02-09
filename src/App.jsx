import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { themeProvider } from "style"

import { Capa } from "./pages/Capa";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Capa />
  }
])

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
