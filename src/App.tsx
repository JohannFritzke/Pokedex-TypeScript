import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { PokeCard } from "./components/PokeCard/PokeCard"
import { PokeDesc } from "./components/PokeDescription/PokeDesc"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

import logo from "./img/logo.svg"

import "./global.css"
export function App() {
  return (

    <ThemeProvider defaultTheme="darknes" storageKey="vite-ui-theme">
      <div className="header flex justify-between mt-1">

        <div className="logo flex items-center">
          <img className="max-w-10" src={logo} alt="" />
          <p>Pokedex</p>
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input placeholder="Pesquisar..." />
          <Button><i className='bx bx-search-alt-2 text-xl'></i></Button>
        </div>
        <div className=""><ModeToggle /></div>
      </div>

      <div className="main grid grid-cols-6 gap-2 justify-items-center px-24 mt-1">
        {
          Array.from({ length: 12 }).map((_, i) => {
            return (

              <Dialog>
                <DialogTrigger><PokeCard /></DialogTrigger>
                <DialogContent>
                  <PokeDesc />
                </DialogContent>
              </Dialog>

            )
          })
        }
      </div>
    </ThemeProvider>

  )
}


