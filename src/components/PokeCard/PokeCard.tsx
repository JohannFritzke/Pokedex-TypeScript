import React from "react";
import "./PokeCard.css";
import "./TypesColors.css";

import Img from "./1.png";

export function PokeCard({ nome, numero, img, types }: { nome: string, numero: number, img: string, types: any[] }) {

  const typesHandler = () => {
    if (types[1]) {
      return (
        <footer className="types">
          <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
          <p className={`type2 ${types[1].type.name}`}>{types[1].type.name}</p>
        </footer>
      );
    } else {
      return (
        <footer className="types">
          <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
        </footer>
      );
    }
  };
  return (
    <div className={`poke-card-content ${types[0].type.name}`}>
      <header>
        <p className="number">{`#${numero}`}</p>
      </header>

      <main>
        <div className="poke-img">
          <img src={img} alt="name" />
        </div>
        <h1>{nome}</h1>
      </main>

      {typesHandler()}
    </div>
  );
}
