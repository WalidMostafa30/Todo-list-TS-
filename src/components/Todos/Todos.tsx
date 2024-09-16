import TodosItems from "../TodosItems/TodosItems";

interface FormObj {
  content: string;
  color: string;
  id: number;
  status: string;
}

interface TodosProps {
  items: FormObj[];
}

const Todos: React.FC<TodosProps> = ({ items }) => {
  return (
    <div className="Todos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-5">
      {items.map((item) => (
        <TodosItems key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Todos;
