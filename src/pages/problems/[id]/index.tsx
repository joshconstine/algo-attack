import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function Problem() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Algo Attack</title>
        <meta name="description" content="become an expert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div>
          <h1>Problem {id}</h1>
        </div>
      </main>
    </>
  );
}
