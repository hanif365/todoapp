const { create } = require("zustand");
import { devtools, persist } from "zustand/middleware";
import todoSlice from "./slices/todoSlice";

const useStore = create(
  devtools((...a) => ({
    ...todoSlice(...a),
  }))
);

export default useStore;
