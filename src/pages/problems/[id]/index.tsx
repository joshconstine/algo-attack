import Head from "next/head";
import { useRouter } from "next/router";
import CodeEditor from "./CodeEditor";
import { Examples } from "./Examples";
import { useState } from "react";
import Description from "./Description";
import { problems } from "~/utils/problems";
import { toast } from "react-toastify";
import Split from "react-split";
export default function Problem() {
  const router = useRouter();
  const { id } = router.query;

  const problem = problems[Number(id)];
  const [codeEditorInput, setCodeEditorInput] = useState(problem?.starterCode);

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
          // setSuccess(true);
          // setTimeout(() => {
          //   setSuccess(false);
          // }, 4000);
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
      <main>
        <Split className="split">
          <Description
            problemName={problem.title}
            problemDescription={problem.problemStatement}
          />
          <Split
            className="h-[calc(100vh-94px)]"
            direction="vertical"
            sizes={[60, 40]}
            minSize={60}
          >
            <CodeEditor
              codeEditorInput={codeEditorInput}
              setCodeEditorInput={setCodeEditorInput}
            />
            <Examples handleRunCode={handleRun} />
          </Split>
        </Split>
      </main>
    </>
  );
}
