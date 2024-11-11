import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addTodo } from "../../store/todoSlice";
import toast from "react-hot-toast";

const Inputs = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useAppDispatch();

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim().length !== 0) {
      dispatch(
        addTodo({
          content: input.trim(),
          id: new Date().getTime(),
          status: "todo",
        })
      );
      setInput("");
      toast.success("Task added successfully");
    } else {
      toast.error("Enter your Todo to add");
    }
  };

  return (
    <form
      onSubmit={onsubmitHandler}
      className="mt-5 p-2 mx-auto lg:w-3/6 rounded-lg bg-black shadow shadow-black flex gap-1"
    >
      <input
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.currentTarget.value)
        }
        type="text"
        placeholder="Add Task.."
        className="outline-none text-xl p-2 rounded-md w-full"
      />
      <button className="p-2 px-4 text-white font-bold border-solid border-2 border-white rounded-md">
        Add
      </button>
    </form>
  );
};

export default Inputs;
