import Inputs from "../../components/Inputs/Inputs";
import Todos from "../../components/Todos/Todos";
import { useAppSelector } from "../../store/store";

const Todo = () => {
  const { todos } = useAppSelector((state) => state.todo);

  return (
    <section className="container">
      <Inputs />
      {todos.length > 0 ? (
        <Todos items={todos} />
      ) : (
        <h1 className="w-fit mx-auto text-center text-4xl mt-40 p-2 rounded-md bg-slate-200 text-slate-600 ">
          No Todos yet.. add some
        </h1>
      )}
    </section>
  );
};

export default Todo;
