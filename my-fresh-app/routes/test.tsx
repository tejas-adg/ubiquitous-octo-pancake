import { Head } from "$fresh/runtime.ts";
import BreakpointTester from "../components/BreakpointTester.tsx";
import Rectangle from "../components/Rectangle.tsx";

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Breakpoint Testing</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section class="snap-start h-screen flex items-center justify-center bg-blue-200">
          <h1 class="text-4xl">Section 1</h1>
        </section>
        <section class="snap-start h-screen flex items-center justify-center bg-green-200">
          <h1 class="text-4xl">Section 2</h1>
        </section>
        <section class="snap-start h-screen flex items-center justify-center bg-pink-200">
          <h1 class="text-4xl">Section 3</h1>
        </section>
      </div>
    </>
  );
}
