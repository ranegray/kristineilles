import Image from "next/image";
import logo from "../public/kristine_logo.png";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="-mt-16 flex flex-col items-center w-3/4">
        <Image src={logo} alt="Kristine" />
        <h1 className="text-md">just a fairies flutter away...</h1>
      </div>
    </main>
  );
}
