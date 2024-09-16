import Todos from "../../components/Todos/Todos";
import { useAppSelector } from "../../store/store";

const Finished = () => {
  const { finished } = useAppSelector((state) => state.todo);

  return (
    <section className="container">
      {finished.length > 0 ? (
        <Todos items={finished} />
      ) : (
        <h1 className="w-fit mx-auto text-center text-4xl mt-40 p-2 rounded-md bg-slate-200 text-slate-600 ">
          No Tasks Finished
        </h1>
      )}
    </section>
  );
};

export default Finished;
