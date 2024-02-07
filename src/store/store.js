const { create } = require("zustand");
import { devtools, persist } from "zustand/middleware";
import todoSlice from "./slices/todoSlice";

const useStore = create(
  persist(
    devtools((...a) => ({
      ...todoSlice(...a),
    })),
    {
      name: "todos",
    }
  )
);

export default useStore;
