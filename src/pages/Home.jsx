import homeimage from "../assets/house.svg";
import searchIcon from "../assets/magnifying-glass.svg";
import filmIcon from "../assets/film-slate.svg";
import trendIcon from "../assets/trend-up.svg";
import plusIcon from "../assets/plus.svg";
import shuffleIcon from "../assets/shuffle.svg";

import titlecard from "../assets/titlecard.png"
import Im from "../assets/1280px-IMDB_Logo_2016.svg.webp"


import MovieCard from "../component/MovieCard";



import'./home.css';

function Home() {
  return (
    <div className="netfilx">
    <div className="sidebar">
    <img src={searchIcon} alt="searchIcon" />
    <img src={homeimage} alt="homeimage" />
    <img src={filmIcon} alt="filmIcon" />
    <img src={trendIcon} alt="trendIcon" />
    <img src={plusIcon} alt="plusIcon" />
    <img src={shuffleIcon} alt="shuffleIcon" />

    {/* <img src={Im} alt="" /> */}
    

    </div>
    <div className="main">
      <div className="hero">
        <div className="hero-content">
          <img src={titlecard} alt="" className="mtitle"/>
          <div className="imdb-box">
            <img src={Im} alt="" className="imdb"/>
          <p> 8/10</p>
          
          </div>
         
         
           <div className="B">
            2B+
            
          </div>
           <p> Streams</p>

          
          <div className="hero-button">
            <button className="playbutton">play</button>
            <button className="trilerbutton">watch Trailer</button>
        </div> 
        

       
        
        </div>
        <div className="coverimg">
        </div>
      </div>
      <MovieCard/>
      
      



    </div>
    </div>
  
  )
}

export default Home