import { useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getTodos } from "../../store/todoSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { mainData } = useAppSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodos());
  }, [mainData, dispatch]);

  return (
    <header className="bg-black shadow shadow-black rounded-ee-2xl rounded-es-2xl overflow-hidden">
      <div className="container flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 py-2">
        <h1 className="text-4xl font-bold text-white">To-Do List</h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
