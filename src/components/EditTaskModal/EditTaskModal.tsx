import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { closeEditForm, editTodo } from "../../store/todoSlice";
import toast from "react-hot-toast";

const EditTaskModal = () => {
  const { editForm } = useAppSelector((state) => state.todo);
  const [input, setInput] = useState(editForm.content);
  const [disableBtn, setDisableBtn] = useState(true);
  const dispatch = useAppDispatch();

  const onChangeEditContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.currentTarget.value);
    if (editForm.content) {
      if (
        editForm.content.trim() !== e.target.value.trim() &&
        e.target.value.trim().length > 0
      ) {
        setDisableBtn(false);
      } else {
        setDisableBtn(true);
      }
    }
  };

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input?.trim().length !== 0) {
      if (input?.trim() !== editForm.content) {
        dispatch(
          editTodo({
            content: input?.trim(),
            id: editForm.id,
          })
        );
        dispatch(closeEditForm());
        setInput("");
        toast.success("Task updated");
      }
    }
  };
  return (
    <div className="fixed left-0 top-0 w-screen h-screen z-50 bg-black/90 flex items-center justify-center">
      <form
        onSubmit={onsubmitHandler}
        className="p-3 rounded-xl w-11/12 lg:w-3/5 bg-black border-2 border-white"
      >
        <textarea
          value={input ? input : ""}
          onChange={onChangeEditContent}
          className="p-2 rounded-md w-full outline-none text-xl max-h-96 min-h-36"
        />

        <div className="flex justify-between mt-2">
          <button
            type="submit"
            disabled={disableBtn}
            className={`py-2 px-4 text-xl rounded-md bg-white text-black ${
              disableBtn ? " bg-zinc-700" : ""
            }`}
          >
            Edit
          </button>
          <span
            className="py-2 px-4 text-xl rounded-md text-white bg-red-800 cursor-pointer"
            onClick={() => dispatch(closeEditForm())}
          >
            Close
          </span>
        </div>
      </form>
    </div>
  );
};

export default EditTaskModal;
