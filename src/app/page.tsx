import Image from "next/image";
import Card from "./card";

export default function Home() {
  return (
    <main className="flex min-w-full min-h-screen flex-col items-center justify-around p-auto m-auto bg-white">
      <div className="flex justify-center items-center p-auto m-auto">
        <Card></Card>
      </div>
    </main>
  );
}
