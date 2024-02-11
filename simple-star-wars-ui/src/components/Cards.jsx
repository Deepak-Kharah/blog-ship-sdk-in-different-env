import React from "react";
import Link from "next/link";

function Cards({ characters }) {
  return (
    <section className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-4 text-gray-900">
      {characters.map((character, idx) => (
        <Card character={character} key={idx} id={idx + 1} />
      ))}
    </section>
  );
}

function Card({ character, id }) {
  return (
    <Link href={`/${id}`}>
      <article
        key={character.name}
        className="p-4 bg-gray-100 rounded-lg border-gray-200 border-2 shadow-lg shadow-gray-100 hover:bg-gray-200 hover:transition-colors duration-300"
      >
        <h2 className="mt-4 text-xl font-bold">{character.name}</h2>
        <div className="flex flex-col justify-center mt-4 gap-1">
          <Detail title="Height" value={character.height} />
          <Detail title="Mass" value={character.mass} />
          <Detail title="Hair color" value={character.hair_color} />
        </div>
      </article>
    </Link>
  );
}

function Detail({ title, value }) {
  return (
    <p className="text-sm">
      <span className="text-gray-400">{title}:</span>{" "}
      <span className="">{value}</span>
    </p>
  );
}

export default Cards;
