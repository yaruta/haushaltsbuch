import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import StatisticsPage from "./pages/StatisticsPage";
import MonthListPage from "./pages/MonthListPage";
import InputPage from "./pages/InputPage";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <InputPage />,
      },
      {
        path: "/list/:monthId",
        element: <MonthListPage />,
      },
      {
        path: "/statistics",
        element: <StatisticsPage />,
      },
    ],
  },
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
