import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { editTodo } from "../../store/todoSlice";
import toast from "react-hot-toast";

interface FormObj {
  content: string;
  color: string;
  id: number;
  status: string;
}

interface modalProps {
  item: FormObj;
  toggleModal: () => void;
}

const EditTaskModal: React.FC<modalProps> = ({ toggleModal, item }) => {
  const [input, setInput] = useState<string>(item.content);
  const dispatch = useAppDispatch();

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim().length !== 0) {
      if (input.trim() !== item.content) {
        dispatch(
          editTodo({
            content: input.trim(),
            id: item.id,
          })
        );
        toggleModal();
        setInput("");
        toast.success("Task Edited successfully 😀");
      } else {
        toast.error("Make any edits");
      }
    } else {
      toast.error("Task mustn't be empty");
    }
  };
  return (
    <div className="fixed left-0 top-0 w-screen h-screen z-50 bg-black/80 flex items-center justify-center">
      <form
        onSubmit={onsubmitHandler}
        className="p-3 rounded-lg w-11/12 lg:w-3/5"
        style={{
          backgroundColor: `${item.color}`,
          boxShadow: `0px 0px 14px 1px ${item.color}`,
        }}
      >
        <textarea
          value={input}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setInput(e.currentTarget.value)
          }
          className="p-2 rounded-md w-full outline-none text-xl max-h-96 min-h-36"
        />

        <div className="flex justify-between mt-2">
          <button
            type="submit"
            className="py-2 px-4 text-xl rounded-md text-white"
            style={{ backgroundColor: "white", color: item.color }}
          >
            Edit
          </button>
          <span
            className="py-2 px-4 text-xl rounded-md text-white cursor-pointer"
            style={{ backgroundColor: "white", color: item.color }}
            onClick={toggleModal}
          >
            Close
          </span>
        </div>
      </form>
    </div>
  );
};

export default EditTaskModal;
