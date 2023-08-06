//@eslint-disable
import Head from "next/head";
import { useRouter } from "next/router";
import CodeEditor from "./CodeEditor";
import { Examples } from "./Examples";
import { useEffect, useState } from "react";
import Description from "./Description";
import { problems } from "~/utils/problems";
import Split from "react-split";
import CodeEditorOptions from "./CodeEditorOptions";
import { useTheme } from "next-themes";
export default function Problem() {
  const router = useRouter();
  const { id } = router.query;
  const { theme } = useTheme();
  const problem = problems[Number(id)];

  const savedInput = localStorage?.getItem(`${id}`);
  const savedFontSize = localStorage?.getItem(`fontSize`);
  const defaultVal = savedInput
    ? JSON.parse(savedInput).codeEditorInput
    : problem?.starterCode;
  const defaultFontSize = savedFontSize ? JSON.parse(savedFontSize) : "16px";
  const [codeEditorInput, setCodeEditorInput] = useState(defaultVal);
  const [fontSize, setFontSize] = useState(defaultFontSize);

  useEffect(() => {
    localStorage.setItem(`fontSize`, JSON.stringify(fontSize));
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem(
      `${id}`,
      JSON.stringify({ codeEditorInput: codeEditorInput })
    );
  }, [codeEditorInput]);
  if (!problem) return null;
  const handleRun = () => {
    try {
      const userCode = codeEditorInput?.slice(
        codeEditorInput.indexOf(problem.starterFunctionName)
      );
      const cb = new Function(`return ${userCode}`)();
      if (typeof problem?.handlerFunction === "function") {
        const success = problem.handlerFunction(cb);
        if (success) {
          window.alert("Congrats! All tests passed!");
        }
      }
    } catch (e: any) {
      console.log(e.message);
      if (
        e.message.startsWith(
          "AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:"
        )
      ) {
        window.alert("Oops! One or more test cases failed");
      } else {
        window.alert(e.message);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Algo Attack</title>
        <meta name="description" content="become an expert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${theme === "light" ? "bg-gray-500" : "bg-black"}`}>
        <Split className="split">
          <Description
            problemName={problem.title}
            problemDescription={problem.problemStatement}
          />
          <Split
            className="h-[calc(100vh-100px)]"
            direction="vertical"
            sizes={[60, 30]}
          >
            <div
              className={`m-2 flex flex-col items-center rounded-lg ${
                theme === "light" ? "bg-white" : "bg-slate-400"
              } p-2`}
            >
              <CodeEditorOptions
                setFontSize={setFontSize}
                fontSize={fontSize}
                handleReset={() => setCodeEditorInput(problem.starterCode)}
              />
              <CodeEditor
                fontSize={fontSize}
                codeEditorInput={codeEditorInput}
                setCodeEditorInput={setCodeEditorInput}
              />
            </div>
            <div className="m-2 flex flex-col items-center">
              <Examples handleRunCode={handleRun} />
            </div>
          </Split>
        </Split>
      </main>
    </>
  );
}
