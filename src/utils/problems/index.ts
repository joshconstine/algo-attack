import { Problem } from "../types/problem";
import { add } from "./1";
import { multiply } from "./2";

interface ProblemMap {
  [key: number]: Problem;
}

export const problems: ProblemMap = {
  1: add,
  2: multiply,
};
