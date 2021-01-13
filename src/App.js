import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmbd";
import MovieRow from "./Components/MovieRow";
import FeaturedMovie from "./Components/FeaturedMovie";
import Header from "./Components/Header";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL
      let list = await Tmdb.getHomelist();
      setMovieList(list);

      //Pegando o Featured - filme em destaque
      let originals = list.filter((i) => i.slug === "originals");
      //Gera numero aleatório
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);


  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="">❤️</span> 
        Direitos de imagem para Netflix
        Dados pegos no site Themoviedb.org
      </footer>


          {movieList.length <= 0 &&
      <div className="loading">
            <img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando"/>
          </div>
          }
    </div>
  );
};
