import Loader from "@/components/Loader";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SimpleStarWarsSdk } from "simple-star-wars-sdk";

const inter = Inter({ subsets: ["latin"] });

function Character() {
  const router = useRouter();
  const { id } = router.query;

  const [state, setState] = useState({
    isLoading: true,
    data: {},
  });

  useEffect(() => {
    if (!id) return;
    SimpleStarWarsSdk.getCharacter(id).then((data) => {
      setState({ ...state, isLoading: false, data: data });
    });
  }, [id]);
  return (
    <main className={`sm:p-10 md:p-15 lg:p-36 ${inter.className}`}>
      <Link
        href="/"
        className="text-sm text-slate-400 mb-4 hover:text-slate-700"
      >
        Go Back
      </Link>
      <h1 className="text-3xl text-gray-900">
        {state.isLoading ? (
          <>
            <Loader size={2} /> Fetching Data...{" "}
          </>
        ) : (
          state.data.name ?? "Classified"
        )}
      </h1>

      <div className="mt-10 flex flex-col gap-2">
        <Detail
          title="Height"
          value={state.data.height}
          isLoading={state.isLoading}
        />
        <Detail
          title="Mass"
          value={state.data.mass}
          isLoading={state.isLoading}
        />
        <Detail
          title="Hair color"
          value={state.data.hair_color}
          isLoading={state.isLoading}
        />
        <Detail
          title="Skin color"
          value={state.data.skin_color}
          isLoading={state.isLoading}
        />
        <Detail
          title="Eye color"
          value={state.data.eye_color}
          isLoading={state.isLoading}
        />
        <Detail
          title="Birth year"
          value={state.data.birth_year}
          isLoading={state.isLoading}
        />
        <Detail
          title="Gender"
          value={state.data.gender}
          isLoading={state.isLoading}
        />
      </div>
    </main>
  );
}

function Detail({ title, value, isLoading }) {
  return (
    <p className="font-light text-xl">
      <span className="text-gray-400">{title}: </span>
      <span className="text-gray-600 font-normal">
        {isLoading ? <Loader size={1} /> : value ?? "classified"}
      </span>
    </p>
  );
}

export default Character;
