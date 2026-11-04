import React from 'react'
import bad from "../assets/breaking bad.jpg";
import game from "../assets/game of thrones.jpg";
import dark from "../assets/dark.jpg";
import alice from "../assets/alice in borderland.jpg";
import squid from "../assets/squid game.jpg";
import stranger from "../assets/stranger things.jpg";
import vikings from "../assets/vikings.jpg";
import derdevil from "../assets/derdevil.jpg";
import wednesday from "../assets/wednesday.jpg";
import you from "../assets/you.jpg";
import blind from "../assets/blind.jpg";
import the from "../assets/the witcher.jpg"
import sand from "../assets/sand man.jpg";
import mon from "../assets/monster.jpg"
import madn from "../assets/The_Madness_(TV_series)_poster.jpg";
import car from "../assets/carry-on.jpg"

import './MovieCard.css';

function MovieCard() {
  return (
    <div>
        <div className="movies">
      <h1> New this week</h1>
      <div className="list">
        <img src={bad} alt="" />
        <img src={game} alt=""/>
        <img src={dark} alt="" />
        <img src={alice} alt="" />
        <img src={squid} alt="" />
        <img src={stranger} alt="" />
        <img src={vikings} alt="" />
        <img src={bad} alt="" />
        <img src={game} alt=""/>
        <img src={dark} alt="" />
        <img src={alice} alt="" />
        <img src={squid} alt="" />
        <img src={stranger} alt="" />
        <img src={vikings} alt="" />
        
        </div>
      </div>
       <div className="now">
      <h1>Trending Now</h1>
      <div className="list">
        <img src={derdevil} alt="" />
        <img src={wednesday} alt="" />
        <img src={you} alt="" />
        <img src={blind} alt="" />
        <img src={the} alt="" />
        <img src={sand} alt="" />
        <img src={mon} alt="" />
        <img src={madn} alt="" />
        <img src={car} alt="" />

        <button>
          
        </button>
        
         </div>
      </div>
      </div>

  )
}

export default MovieCard