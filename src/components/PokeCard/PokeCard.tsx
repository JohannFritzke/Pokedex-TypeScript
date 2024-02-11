import React from "react";
import "./PokeCard.css"
import "./TypesColors.css"

import Img from "./1.png";

export function PokeCard() {
    return (
        <div className="poke-card-content grass">
            <header>
                <i className='bx bxs-star'></i>
                <p className="number">#1</p>
            </header>

            <main>
                <div className="poke-img">
                    <img src={Img} alt="name" />
                </div>
                <h1>Bulbasaur</h1>
            </main>

            <footer className="types">
                <p className="type1 grass">grass</p>
                <p className="type2 poison">poison</p>
            </footer>
        </div>
    )
}