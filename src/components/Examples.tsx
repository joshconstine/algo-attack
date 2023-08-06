import { useTheme } from "next-themes";
import React from "react";
import { Example } from "~/utils/types/problem";

type Props = {
  handleRunCode: () => void;
  examples: Example[];
};

export const Examples = ({ handleRunCode, examples }: Props) => {
  const { theme } = useTheme();
  const [focusedExapmle, setFocusedExample] = React.useState(0);
  return (
    <div
      className={` w-full rounded-lg p-2 ${
        theme === "light" ? "bg-white" : "bg-slate-400"
      } flex flex-col gap-2`}
    >
      <div className={` flex  justify-between `}>
        <h1>Run your code here</h1>
        <div>
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={handleRunCode}
          >
            Run Code
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {examples.map((example, index) => (
          <div key={index}>
            <button
              onClick={() => setFocusedExample(index)}
              className={`rounded px-2 py-1  text-white hover:bg-blue-700 ${
                focusedExapmle === index ? "bg-blue-500" : "bg-blue-200"
              }`}
            >
              example {index + 1}
            </button>
          </div>
        ))}
      </div>
      <div>
        {examples.length > 0 && (
          <div className="my-4 font-semibold">
            <p className="mt-4 text-sm font-medium ">Input:</p>
            <div className="bg-dark-fill-3 mt-2 w-full cursor-text rounded-lg border border-transparent px-3 py-[10px] ">
              {examples[focusedExapmle]?.inputText}
            </div>
            <p className="mt-4 text-sm font-medium ">Output:</p>
            <div className="bg-dark-fill-3 mt-2 w-full cursor-text rounded-lg border border-transparent px-3 py-[10px] ">
              {examples[focusedExapmle]?.outputText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
