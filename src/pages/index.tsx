import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>Algo Attack</title>
        <meta name="description" content="become an expert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center ${
          theme === "light" ? "bg-white" : "bg-black "
        }`}
      >
        <div className={`mt-8 flex flex-col gap-2 rounded-lg p-2  `}>
          <h1 className={`text-4xl font-bold `}>Problems</h1>
          <div className="flex flex-col items-center space-y-2">
            <Link href="/problems/1">
              <motion.div
                className={`w-96 rounded-lg px-4 py-2 font-bold ${
                  theme === "light" ? "bg-gray-200 " : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <span>add</span>
              </motion.div>
            </Link>
            <Link href="/problems/2">
              <motion.div
                className={`w-96 rounded-lg px-4 py-2 font-bold ${
                  theme === "light" ? "bg-gray-200 " : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <span>multiply</span>
              </motion.div>
            </Link>

            <Link href="/problems/3">
              <motion.div
                className={`w-96 rounded-lg px-4 py-2 font-bold ${
                  theme === "light" ? "bg-gray-200 " : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <span>two-sum</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
