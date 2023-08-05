import React from "react";

type Props = {
  problemName: string;
  problemDescription: string;
};

const Description = ({ problemName, problemDescription }: Props) => {
  return (
    <div className="m-2 rounded-lg  bg-white p-2">
      <h1 className="text-4xl font-bold">{problemName}</h1>
      {/* Problem Statement(paragraphs) */}
      <div className="text-sm">
        <div dangerouslySetInnerHTML={{ __html: problemDescription }} />
      </div>
    </div>
  );
};

export default Description;
