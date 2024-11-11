import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import { useAppSelector } from "./store/store";
import EditTaskModal from "./components/EditTaskModal/EditTaskModal";

function App() {
    const { editForm } = useAppSelector((state) => state.todo);

  return (
    <main>
      <Header />
      <Outlet />
      {editForm.status && <EditTaskModal />}

      <Toaster />
    </main>
  );
}

export default App;
