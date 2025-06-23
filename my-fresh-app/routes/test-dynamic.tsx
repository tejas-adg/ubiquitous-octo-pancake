import { Head } from "$fresh/runtime.ts";
import DynamicTextContainer from "../islands/DynamicTextContainer.tsx";
import DinamicTextContainer from "../islands/DinamicTextContainer.tsx";

export default function TestDynamicText() {
  return (
    <>
      <Head>
        <title>Dynamic Text Container Test</title>
      </Head>
      <div style={{ padding: "20px" }}>
        <h1>Dynamic Text Container Test</h1>

        <h2>Single Text (fills entire container)</h2>
        <div
          style={{
            border: "2px solid blue",
            width: "900px",
            height: "300px",
            margin: "20px 0",
          }}
        >
          <DinamicTextContainer
            texts={["Hello World"]}
          />
        </div>

        <h2>Multiple Texts (shared area)</h2>
        <div
          style={{
            border: "2px solid red",
            width: "600px",
            height: "300px",
            margin: "20px 0",
          }}
        >
          <DynamicTextContainer
            texts={["First Line", "Second Line", "Third Line"]}
            paragraphSpacing={16}
          />
        </div>

        <h2>Different Container Size</h2>
        <div
          style={{
            border: "2px solid green",
            width: "400px",
            height: "400px",
            margin: "20px 0",
          }}
        >
          <DynamicTextContainer
            texts={["Shorter", "Text", "In", "Square"]}
            paragraphSpacing={8}
          />
        </div>

        <h2>Long Text Test</h2>
        <div
          style={{
            border: "2px solid purple",
            width: "300px",
            height: "600px",
            margin: "20px 0",
          }}
        >
          <DinamicTextContainer
            texts={[
              "This is a much longer text that should scale appropriately",
            ]}
          />
        </div>
      </div>
    </>
  );
}
