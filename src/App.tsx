import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { PokeCard } from "./components/PokeCard/PokeCard";
import { PokeDesc } from "./components/PokeDescription/PokeDesc";
import { useEffect, useState } from "react";
import axios from "axios";
import { PaginationSection } from "./components/PaginationSection";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SkeletonCard } from "./components/SkeletonCard";
import logo from "/logo.svg";

import "./global.css";
export function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, SetItemsPerPage] = useState(12);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = pokemons.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0`
    );
    const newPokemons = await Promise.all(
      response.data.results.map((pokemon: { url: string }) =>
        axios.get(pokemon.url)
      )
    );
    setPokemons([...pokemons, ...newPokemons]);
  };

  return (
    <ThemeProvider defaultTheme="darknes" storageKey="vite-ui-theme">
      <div className="w-full flex justify-between px-4 mt-1">
        <div className="logo flex items-center">
          <img className="max-w-10" src={logo} alt="" />
          <p>Pokedex</p>
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input placeholder="Pesquisar..." />
          <Button>
            <i className="bx bx-search-alt-2 text-xl"></i>
          </Button>
        </div>
        <div className="">
          <ModeToggle />
        </div>
      </div>

      <div className="main grid grid-cols-6 gap-2 justify-items-center px-24 mt-1">
        {pokemons.length === 0 ? (
          Array.from({length:12}).map((_,i)=>{
            return(
              <SkeletonCard/>
            )
          })
        ) : (
          currentItems.map((pokemon, key) => (
            <Dialog key={key}>
              <DialogTrigger>
                <PokeCard
                  nome={pokemon.data.name}
                  img={
                    pokemon.data.sprites.other["official-artwork"].front_default
                  }
                  types={pokemon.data.types}
                  numero={pokemon.data.id}
                />
              </DialogTrigger>
              <DialogContent>
                <PokeDesc
                  nome={pokemon.data.name}
                  img={
                    pokemon.data.sprites.other["official-artwork"].front_default
                  }
                  types={pokemon.data.types}
                  stats={pokemon.data.stats}
                  numero={pokemon.data.id}
                />
              </DialogContent>
            </Dialog>
          ))
        )}
      </div>
      <PaginationSection
        totalItems={pokemons.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </ThemeProvider>
  );
}
