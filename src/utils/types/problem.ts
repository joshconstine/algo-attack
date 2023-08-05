export type Example = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
};

// local problem data
export type Problem = {
  id: number;
  title: string;
  problemStatement: string;
  examples: Example[];
  constraints: string;
  order: number;
  starterCode: string;
  handlerFunction: ((fn: any) => boolean) | string;
  starterFunctionName: string;
};
