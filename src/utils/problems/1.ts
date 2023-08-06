import assert from "assert";
import { Problem } from "../types/problem";
const starterCode = `function add(a, b){
  // Write your code here
};`;

// checks if the user has the correct code
const handler = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [2, 7],
      [3, 2],
      [3, 3],
    ];

    const answers = [9, 5, 6];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      //@ts-ignore
      const result = fn(nums[i][0], nums[i][1]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("add handler function error");
    throw new Error(error);
  }
};

export const add: Problem = {
  id: 1,
  title: "1. add",
  problemStatement: `<p class='mt-3'>
add the numbers together.</p>`,
  examples: [
    {
      id: 1,
      inputText: "a = 2, b = 4",
      outputText: "6",
      explanation: "Because 2 + 4 = 6.",
    },
    {
      id: 2,
      inputText: "a = 3, b = 2",
      outputText: "5",
      explanation: "Because 3 + 2 = 5.",
    },
    {
      id: 3,
      inputText: "a = 3, b = 3",
      outputText: "6",
      explanation: "Because 3 + 3 = 6.",
    },
  ],
  constraints: ``,
  handlerFunction: handler,
  starterCode: starterCode,
  order: 1,
  starterFunctionName: "function add(",
};
