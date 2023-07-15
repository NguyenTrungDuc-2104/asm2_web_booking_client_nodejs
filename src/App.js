import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFoundPage from "./pages/404NotFound";
import HomePage, {
  loader as homeLoader,
  action as homeSearchAction,
} from "./pages/Home";
import SearchPage, { action as actionSearch } from "./pages/Search";
import DetailPage, { loader as detailLoader } from "./pages/Detail";
import BookingPage, { actionBooking } from "./pages/Booking";
import LoginPage, { action as loginAction } from "./pages/Login";
import RegisterPage, { action as registerAction } from "./pages/Register";
import TransactionsPage, {
  loader as transactionsLoader,
} from "./pages/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    action: homeSearchAction,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "search",
        element: <SearchPage />,
        action: actionSearch,
      },
      {
        path: "detail/:detailId",
        id: "detail-hotel",
        loader: detailLoader,
        children: [
          {
            index: true,
            element: <DetailPage />,
          },
          {
            path: "booking",
            element: <BookingPage />,
            action: actionBooking,
          },
        ],
      },
      {
        path: "transactions",
        element: <TransactionsPage />,
        loader: transactionsLoader,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
    action: loginAction,
  },
  {
    path: "register",
    element: <RegisterPage />,
    action: registerAction,
  },
  { path: "*", element: <NotFoundPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
