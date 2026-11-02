import homeimage from "../assets/house.svg";
import searchIcon from "../assets/magnifying-glass.svg";
import filmIcon from "../assets/film-slate.svg";
import trendIcon from "../assets/trend-up.svg";
import plusIcon from "../assets/plus.svg";
import shuffleIcon from "../assets/shuffle.svg";
import titlecard from "../assets/titlecard.png"
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
    

    </div>
    <div className="main">
      <div className="hero">
        <div className="hero-content">
          <img src={titlecard} alt="" />
          <p>IMDB : 8/10</p>
          <p>2M Streams</p>
        </div>
        <div className="coverimg">

        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Home