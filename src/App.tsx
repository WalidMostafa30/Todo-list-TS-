import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <main>
      <Header />
      <Outlet />
      <Toaster />
    </main>
  );
}

export default App;
