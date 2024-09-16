import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import {
  moveToFinished,
  moveToInprogress,
  moveToTodos,
  removeTodo,
} from "../../store/todoSlice";
import toast from "react-hot-toast";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import { useState } from "react";

interface FormObj {
  content: string;
  color: string;
  id: number;
  status: string;
}

interface TodosItemsProps {
  item: FormObj;
}

const TodosItems: React.FC<TodosItemsProps> = ({ item }) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const toggleModal = () => setEditModal((prev) => !prev);

  const location = useLocation();
  const dispatch = useAppDispatch();

  const removeTask = (id: number) => {
    dispatch(removeTodo(id));
    toast.success("Task removed");
  };

  const addTaskTodo = (id: number) => {
    dispatch(moveToTodos(id));
    toast.success("Task back to Todo");
  };

  const addTaskToInprogress = (id: number) => {
    dispatch(moveToInprogress(id));
    toast.success("Task InProgress now");
  };

  const addTaskFinished = (id: number) => {
    dispatch(moveToFinished(id));
    toast.success("Task Finished");
  };

  return (
    <>
      <div
        className={`TodosItems shadow-lg rounded-md p-3 border-solid border-2 relative flex flex-col justify-between`}
        style={{
          backgroundColor: `${item.color}30`,
          borderColor: `${item.color}`,
        }}
      >
        <div className="absolute top-[-15px] right-[-10px]">
          <span
            className="text-white  rounded-md text-xl px-2 mx-2 cursor-pointer"
            style={{ backgroundColor: `${item.color}` }}
            onClick={toggleModal}
          >
            Edit
          </span>

          <span
            className="text-white  rounded-md text-xl px-2 cursor-pointer"
            style={{ backgroundColor: `${item.color}` }}
            onClick={() => removeTask(item.id)}
          >
            X
          </span>
        </div>

        <p
          className="line-clamp-3 font-semibold text-2xl"
          style={{
            color: `${item.color}`,
            textDecoration:
              location.pathname === "/finished" ? "line-through" : "none",
          }}
        >
          {item.content}
        </p>

        <div className="mt-4 flex justify-between">
          {location.pathname === "/inprogress" && (
            <span
              className="p-2 rounded-md font-semibold cursor-pointer text-white"
              style={{ backgroundColor: `${item.color}` }}
              onClick={() => addTaskTodo(item.id)}
            >
              Todo
            </span>
          )}
          {location.pathname !== "/inprogress" && (
            <span
              className="p-2 rounded-md font-semibold cursor-pointer text-white"
              style={{ backgroundColor: `${item.color}` }}
              onClick={() => addTaskToInprogress(item.id)}
            >
              Inprogress
            </span>
          )}
          {location.pathname === "/inprogress" && (
            <span
              className="p-2 rounded-md font-semibold cursor-pointer text-white"
              style={{ backgroundColor: `${item.color}` }}
              onClick={() => addTaskFinished(item.id)}
            >
              Finished
            </span>
          )}
        </div>
      </div>
      {editModal && <EditTaskModal item={item} toggleModal={toggleModal} />}
    </>
  );
};

export default TodosItems;
