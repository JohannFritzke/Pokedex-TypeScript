import { Progress } from "@/components/ui/progress";
import axios from "axios";
import "./PokeDesc.css";

export function PokeDesc({
  nome,
  img,
  types,
  stats,
  numero,
}: {
  nome: string;
  img: string;
  types: any[];
  stats: any[];
  numero: string;
}) {
  function porcetagem(value: number) {
    return (value / 200) * 100;
  }

  const typesHandler = () => {
    if (types[1]) {
      return (
        <div className="types">
          <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
          <p className={`type2 ${types[1].type.name}`}>{types[1].type.name}</p>
        </div>
      );
    } else {
      return (
        <div className="types">
          <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
        </div>
      );
    }
  };

  const shiny = (id: string) => {
    const shinyElement = document.getElementById(id) as HTMLImageElement | null;

    if (shinyElement !== null) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((resp) => {
        if (shinyElement && shinyElement.src.includes("shiny")) {
          shinyElement.src =
            resp.data.sprites.other["official-artwork"].front_default;
        } else if (
          shinyElement &&
          resp.data.sprites.other["official-artwork"].front_shiny != null
        ) {
          shinyElement.src =
            resp.data.sprites.other["official-artwork"].front_shiny;
        }
      });
    }
  };

  return (
    <div className="poke-desc">
      <div className="infos">
        <div className="poke-header">
          <p>
            {nome} <i className="bx bx-star" onClick={() => shiny(numero)}></i>
          </p>
          <div className="poke-img">
            <img src={img} alt="" id={numero} />
          </div>
          {typesHandler()}
        </div>

        <div className="poke-infos">
          <div className="poke-stats">
            <p className="title">Base Stats</p>
            <div className="stats">
              <div className="value">
                <p>HP</p>
                <p>{stats[0].base_stat}</p>
                <Progress value={porcetagem(stats[0].base_stat)} />
              </div>
              <div className="value">
                <p>Attack</p>
                <p>{stats[1].base_stat}</p>
                <Progress value={porcetagem(stats[1].base_stat)} />
              </div>
              <div className="value">
                <p>Defense</p>
                <p>{stats[2].base_stat}</p>
                <Progress value={porcetagem(stats[2].base_stat)} />
              </div>
              <div className="value">
                <p>Sp. Atk</p>
                <p>{stats[3].base_stat}</p>
                <Progress value={porcetagem(stats[3].base_stat)} />
              </div>
              <div className="value">
                <p>Sp. Def</p>
                <p>{stats[4].base_stat}</p>
                <Progress value={porcetagem(stats[4].base_stat)} />
              </div>
              <div className="value">
                <p>Speed</p>
                <p>{stats[5].base_stat}</p>
                <Progress value={porcetagem(stats[5].base_stat)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
