import Todos from "../../components/Todos/Todos";
import { useAppSelector } from "../../store/store";

const Inprogress = () => {
  const { inprogress } = useAppSelector((state) => state.todo);

  return (
    <section className="container">
      {inprogress.length > 0 ? (
        <Todos items={inprogress} />
      ) : (
        <h1 className="empty-msg">No Tasks In Progress</h1>
      )}
    </section>
  );
};

export default Inprogress;
