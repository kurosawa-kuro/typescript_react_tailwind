// App.tsx
import React from "react";
import { useStore } from "./state/store";
import { FaPlus, FaMinus } from "react-icons/fa";

const App: React.FC = () => {
  const { count, increase, decrease } = useStore();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Count: {count}
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={increase}
            className="group relative flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <FaPlus className="mr-2" />
            Increase
          </button>
          <button
            onClick={decrease}
            className="group relative flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            <FaMinus className="mr-2" />
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
