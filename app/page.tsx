"use client";
import { Button } from "@/components/ui/stateful-button";

export default function Home() {
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };
  return (
    <div>
      <h1 className="text-violet-700 underline text-center mt-11 text-5xl">
        Hello World
      </h1>
      <Button onClick={handleClick}>send massage</Button>
    </div>
  );
}
