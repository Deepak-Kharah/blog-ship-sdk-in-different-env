import Cards from "@/components/Cards";
import Loader from "@/components/Loader";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { SimpleStarWarsSdk } from "simple-star-wars-sdk";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [state, setState] = useState({
    isLoading: true,
    data: [],
  });

  useEffect(() => {
    SimpleStarWarsSdk.getAllCharacters().then((res) => {
      setState({ ...state, isLoading: false, data: res });
    });
  }, []);

  return (
    <main className={`sm:p-10 md:p-15 lg:p-36 ${inter.className}`}>
      <h1 className="text-center text-4xl font-bold">
        Star wars character directory
      </h1>

      {state.isLoading ? (
        <div className="text-center mt-20">
          <Loader />
        </div>
      ) : (
        <Cards characters={state.data} />
      )}
    </main>
  );
}
