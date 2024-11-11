import Todos from "../../components/Todos/Todos";
import { useAppSelector } from "../../store/store";

const Finished = () => {
  const { finished } = useAppSelector((state) => state.todo);

  return (
    <section className="container">
      {finished.length > 0 ? (
        <Todos items={finished} />
      ) : (
        <h1 className="empty-msg">
          No Tasks Finished
        </h1>
      )}
    </section>
  );
};

export default Finished;
