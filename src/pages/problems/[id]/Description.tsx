import React from "react";

type Props = {
  problemName: string;
  problemDescription: string;
};

const Description = (props: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">{props.problemName}</h1>
      <p className="text-xl">{props.problemDescription}</p>
    </div>
  );
};

export default Description;
