import { Outlet } from "react-router-dom";
import { HeaderPage } from "./components/layout/header";

function App() {
  return (
    <>
      <HeaderPage />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
