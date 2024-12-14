/*
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function JokePage() {
  const joke = useSignal("");
  
  const getNewJoke = async () => {
    const response = await fetch("/api/joke");
    const text = await response.text();
    joke.value = text;
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold mb-8">Programming Joke</h1>
        <div class="p-4 bg-white rounded-lg shadow-lg">
          <p class="text-xl">{joke.value}</p>
        </div>
        <button 
          onClick={getNewJoke}
          class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
}
*/
