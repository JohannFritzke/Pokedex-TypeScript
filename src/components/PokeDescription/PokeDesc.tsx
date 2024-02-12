import { Progress } from "@/components/ui/progress"
import img from "../PokeCard/1.png"
import "./PokeDesc.css"

export function PokeDesc() {
    return (
        <div>
            <div className="poke-header">
                <p>Bulbasaur</p>
                <div className="types">
                    <p className="type1 grass">grass</p>
                    <p className="type2 poison">poison</p>
                </div>
            </div>

            <div className="poke-infos">
                <div className="poke-img">
                    <img src={img} alt="" />
                </div>

                <div className="poke-stats">
                    <p>Base Stats</p>
                    <div className="stats">
                        <div className="value"><p>HP 45</p><Progress value={33} /></div>
                        <div className="value"><p>Attack 49</p><Progress value={33} /></div>
                        <div className="value"><p>Defense 49</p><Progress value={33} /></div>
                        <div className="value"><p>Sp. Atk 65</p><Progress value={33} /></div>
                        <div className="value"><p>Sp. Def 65</p><Progress value={33} /></div>
                        <div className="value"><p>Speed 45</p><Progress value={33} /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}