import assert from "assert";
import { Problem } from "../types/problem";
const starterCode = `function multiply(a, b){
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

    const answers = [14, 6, 9];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      //@ts-ignore
      const result = fn(nums[i][0], nums[i][1]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("multiply handler function error");
    throw new Error(error);
  }
};

export const multiply: Problem = {
  id: 2,
  title: "2. multiply",
  problemStatement: `<p class='mt-3'>
multiply the params a,b  and return the result.</p>`,
  examples: [
    {
      id: 1,
      inputText: "a = 2, b = 4",
      outputText: "8",
      explanation: "Because 2 * 4 = 8.",
    },
    {
      id: 2,
      inputText: "a = 3, b = 2",
      outputText: "6",
      explanation: "Because 3 * 2 = 6.",
    },
    {
      id: 3,
      inputText: "a = 3, b = 3",
      outputText: "9",
      explanation: "Because 3 * 3 = 9.",
    },
  ],
  constraints: ``,
  handlerFunction: handler,
  starterCode: starterCode,
  order: 1,
  starterFunctionName: "function multiply(",
};
