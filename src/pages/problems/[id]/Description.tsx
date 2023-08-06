import { useTheme } from "next-themes";
import React from "react";

type Props = {
  problemName: string;
  problemDescription: string;
};

const Description = ({ problemName, problemDescription }: Props) => {
  const { theme } = useTheme();
  return (
    <div
      className={`m-2 rounded-lg   p-2 ${
        theme === "light" ? "bg-white" : "bg-slate-400"
      }`}
    >
      <h1 className="text-4xl font-bold">{problemName}</h1>
      {/* Problem Statement(paragraphs) */}
      <div className="text-sm">
        <div dangerouslySetInnerHTML={{ __html: problemDescription }} />
      </div>
    </div>
  );
};

export default Description;
