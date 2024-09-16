import { useState } from "react";
import Colors from "../Colors/Colors";
import { useAppDispatch } from "../../store/store";
import { addTodo } from "../../store/todoSlice";
import toast from "react-hot-toast";

const Inputs = () => {
  const theColors: string[] = [
    "#475569",
    "#d2328b",
    "#eaa751",
    "#326bd2",
    "#c2172f",
    "#1ac217",
  ];
  const [index, setIndex] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const dispatch = useAppDispatch();

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim().length !== 0) {
      dispatch(
        addTodo({
          content: input.trim(),
          color: theColors[index],
          id: new Date().getTime(),
          status: "todo",
        })
      );
      setInput("");
      toast.success("Task added successfully 😀");
    } else {
      toast.error("Enter your Task to add");
    }
  };

  return (
    <form
      onSubmit={onsubmitHandler}
      className="mt-5 p-2 rounded-md bg-slate-200 flex gap-1"
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
      <Colors theColors={theColors} index={index} setIndex={setIndex} />
      <button className="p-2 text-slate-600 font-bold border-solid border-2 border-slate-600 rounded-md">
        Add
      </button>
    </form>
  );
};

export default Inputs;