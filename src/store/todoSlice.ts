import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormObj } from "../types/types";

const mainData = JSON.parse(
  localStorage.getItem("TodoTS") || "[]"
) as FormObj[];

const todoInLocalStorage = (data: FormObj[]) => {
  localStorage.setItem("TodoTS", JSON.stringify(data));
};

interface TodoState {
  mainData: FormObj[];
  todos: FormObj[];
  inprogress: FormObj[];
  finished: FormObj[];
  editForm: {
    status: boolean;
    id: number | null;
    content: string | null;
  };
}

const initialState: TodoState = {
  mainData,
  todos: [],
  inprogress: [],
  finished: [],
  editForm: {
    status: false,
    id: null,
    content: null,
  },
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<FormObj>) => {
      state.mainData.push(action.payload);
      todoInLocalStorage(state.mainData);
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.mainData = state.mainData.filter(
        (item) => item.id !== action.payload
      );
      todoInLocalStorage(state.mainData);
    },

    getTodos: (state) => {
      state.todos = state.mainData.filter((item) => item.status === "todo");
      state.inprogress = state.mainData.filter(
        (item) => item.status === "inprogress"
      );
      state.finished = state.mainData.filter(
        (item) => item.status === "finished"
      );
    },

    changeStatus: (state, action) => {
      const { id, status } = action.payload;
      const currentItem = state.mainData.find((item) => item.id === id);
      if (currentItem) {
        currentItem.status = status;
      }
      todoInLocalStorage(state.mainData);
    },

    editTodo: (state, action) => {
      const { id, content } = action.payload;
      const currentItem = state.mainData.find((item) => item.id === id);

      if (currentItem) {
        currentItem.content = content;
      }
      todoInLocalStorage(state.mainData);
    },

    openEditForm: (state, action) => {
      const { id, content } = action.payload;
      state.editForm.status = true;
      state.editForm.id = id;
      state.editForm.content = content;
    },

    closeEditForm: (state) => {
      state.editForm.status = false;
      state.editForm.id = null;
      state.editForm.content = null;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  editTodo,
  openEditForm,
  closeEditForm,
  getTodos,
  changeStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
