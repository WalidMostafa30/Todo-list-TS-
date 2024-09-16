import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormObj {
  content: string;
  color: string;
  id: number;
  status: string;
}

interface TodoState {
  mainData: FormObj[];
  todos: FormObj[];
  inprogress: FormObj[];
  finished: FormObj[];
}

const mainData = JSON.parse(
  localStorage.getItem("todoTS") || "[]"
) as FormObj[];

const todoInLocalStorage = (data: FormObj[]) => {
  localStorage.setItem("todoTS", JSON.stringify(data));
};

const initialState: TodoState = {
  mainData,
  todos: [],
  inprogress: [],
  finished: [],
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

    editTodo: (state, action) => {
      const currentItem = state.mainData.find(
        (item) => item.id === action.payload.id
      );

      if (currentItem) {
        currentItem.content = action.payload.content;
      }
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

    moveToTodos: (state, action: PayloadAction<number>) => {
      const currentItem = state.mainData.find(
        (item) => item.id === action.payload
      );
      if (currentItem) {
        currentItem.status = "todo";
      }
      todoInLocalStorage(state.mainData);
    },

    moveToInprogress: (state, action: PayloadAction<number>) => {
      const currentItem = state.mainData.find(
        (item) => item.id === action.payload
      );
      if (currentItem) {
        currentItem.status = "inprogress";
      }
      todoInLocalStorage(state.mainData);
    },

    moveToFinished: (state, action: PayloadAction<number>) => {
      const currentItem = state.mainData.find(
        (item) => item.id === action.payload
      );
      if (currentItem) {
        currentItem.status = "finished";
      }
      todoInLocalStorage(state.mainData);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  editTodo,
  getTodos,
  moveToTodos,
  moveToInprogress,
  moveToFinished,
} = todoSlice.actions;
export default todoSlice.reducer;
