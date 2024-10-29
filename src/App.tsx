import React from "react";
import "./App.css";
import MainLayout from "./layouts/AppLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import UserInfo from "./components/masarat/userSideBar/userInfo/UserInfo";
import Home from "./components/masarat/hompage/Home";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={mainRouter} />
      </Provider>
    </>
  );
}

export default App;
