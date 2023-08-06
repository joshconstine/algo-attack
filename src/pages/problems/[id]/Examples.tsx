import { useTheme } from "next-themes";
import React from "react";

type Props = {
  handleRunCode: () => void;
};

export const Examples = (props: Props) => {
  const { theme } = useTheme();
  return (
    <div
      className={` h-full w-full rounded-lg  ${
        theme === "light" ? "bg-white" : "bg-slate-400"
      } p-2`}
    >
      <h1>Run your code here</h1>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={props.handleRunCode}
      >
        Run Code
      </button>
    </div>
  );
};
