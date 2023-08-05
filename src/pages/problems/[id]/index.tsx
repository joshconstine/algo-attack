import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import CodeEditor from "./CodeEditor";
import { Examples } from "./Examples";
import { useState } from "react";
import Description from "./Description";
export default function Problem() {
  const router = useRouter();
  const { id } = router.query;
  const [codeEditorInput, setCodeEditorInput] = useState(
    "console.log('hello')"
  );
  const handleRun = () => {
    console.log("run");
    const cb = new Function(`return ${codeEditorInput}`)();
    cb();
  };

  return (
    <>
      <Head>
        <title>Algo Attack</title>
        <meta name="description" content="become an expert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex  flex-col items-center gap-48">
        <Description
          problemName="hello world"
          problemDescription=" print 'hello world' to the console"
        />
        <CodeEditor
          codeEditorInput={codeEditorInput}
          setCodeEditorInput={setCodeEditorInput}
        />
        <Examples handleRunCode={handleRun} />
      </main>
    </>
  );
}
