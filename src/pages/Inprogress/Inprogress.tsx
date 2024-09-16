import Todos from "../../components/Todos/Todos";
import { useAppSelector } from "../../store/store";

const Inprogress = () => {
  const { inprogress } = useAppSelector((state) => state.todo);

  return (
    <section className="container">
      {inprogress.length > 0 ? (
        <Todos items={inprogress} />
      ) : (
        <h1 className="w-fit mx-auto text-center text-4xl mt-40 p-2 rounded-md bg-slate-200 text-slate-600 ">
          No Tasks In Progress
        </h1>
      )}
    </section>
  );
};

export default Inprogress;
