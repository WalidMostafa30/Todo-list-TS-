import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { changeStatus, openEditForm, removeTodo } from "../../store/todoSlice";
import toast from "react-hot-toast";
import { FormObj } from "../../types/types";

interface TodosItemsProps {
  item: FormObj;
}

const TodosItems: React.FC<TodosItemsProps> = ({ item }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const removeTask = (id: number) => {
    dispatch(removeTodo(id));
    toast.success("Task removed");
  };

  const todoActions = (id: number, status: string) => {
    dispatch(changeStatus({ id, status }));
    toast.success(`Task go to ${status}`);
  };

  return (
    <div className="shadow-md shadow-black bg-black rounded-lg p-1 flex flex-col">
      <div className="flex justify-end mb-1 p-1">
        <span
          className="text-black bg-white rounded-md text-xl py-1 px-3 mx-2 font-semibold cursor-pointer"
          onClick={() =>
            dispatch(openEditForm({ id: item.id, content: item.content }))
          }
        >
          Edit
        </span>

        <span
          className="text-white bg-red-800 rounded-md text-xl py-1 px-3 font-semibold cursor-pointer"
          onClick={() => removeTask(item.id)}
        >
          X
        </span>
      </div>

      <div className="bg-white p-1 rounded-md h-full flex flex-col justify-between">
        <p
          className="line-clamp-3 font-semibold text-2xl"
          style={{
            textDecoration:
              location.pathname === "/finished" ? "line-through" : "none",
          }}
        >
          {item.content}
        </p>

        <div className="mt-4 flex justify-between">
          {location.pathname === "/inprogress" && (
            <span
              className="p-2 rounded-md font-semibold cursor-pointer text-white bg-black"
              onClick={() => todoActions(item.id, "todo")}
            >
              Todo
            </span>
          )}
          {location.pathname !== "/inprogress" && (
            <span
              className="p-2 rounded-md font-semibold cursor-pointer text-white bg-black"
              onClick={() => todoActions(item.id, "inprogress")}
            >
              Inprogress
            </span>
          )}
          {location.pathname === "/inprogress" && (
            <span
              className="p-2 rounded-md font-semibold cursor-pointer text-white bg-black"
              onClick={() => todoActions(item.id, "finished")}
            >
              Finished
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodosItems;
