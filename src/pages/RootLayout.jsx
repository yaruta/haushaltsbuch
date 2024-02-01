import Header from "../components/Layout/Header";
import StoreProvider from "../store/StoreProvider";
import { Outlet } from "react-router-dom";

function RootLayout() { 

  return (
    <StoreProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </StoreProvider>
  );
}

export default RootLayout;
