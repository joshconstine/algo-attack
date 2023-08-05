import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Algo Attack</title>
        <meta name="description" content="become an expert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center  ">
        <div className="flex flex-col">
          <h1>Problems</h1>
          <Link href="/problems/1">
            <span className="underline">add</span>
          </Link>
          <Link href="/problems/2">
            <span className="underline">multiply</span>
          </Link>
        </div>
      </main>
    </>
  );
}
