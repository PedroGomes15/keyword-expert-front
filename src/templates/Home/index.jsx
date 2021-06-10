import { useEffect, useState, useCallback } from "react";

import "./style.css";

import { InputSearch } from "../../components/InputSearch";
import { RelatedKeyword } from "../../components/RelatedKeyword";
import { getAmazonBestSelers } from "../../utils/my-poseo-amazon";
import logo from "../../assets/avatar.png";

export const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [relatedKeywords, setRelatedKeywords] = useState([]);

  const handleMyPoseoSearch = () => {
    console.log(getAmazonBestSelers());
  };

  const handleOnSearchSubmit = (value) => {
    setKeyword(value);
    console.log("Search: ", value); //Função quando o search da um submit
    setRelatedKeywords([
      {
        keyword: "Teste",
        trend: 80,
      },
      { keyword: "Pepe lindao", trend: 50 },
      { keyword: "Pepe maravilhoso", trend: 20 },
      { keyword: "Pepe do teste", trend: 5 },
    ]);
  };

  return (
    <section className="container">
      <div className="home">
        <div className="search">
          <div className="container-title">
            <img className="logo" src={logo} alt="KeywordExpert" />
            <h1 className="title">KeywordExpert</h1>
          </div>
          <div className="container-input">
            <InputSearch
              className="input-search"
              onSubmit={handleOnSearchSubmit}
            />
          </div>
        </div>
        {keyword && (
          <div className="result-search">
            {relatedKeywords.map((relatedKeyword) => (
              <RelatedKeyword
                key={relatedKeyword.keyword}
                keyword={relatedKeyword.keyword}
                trend={relatedKeyword.trend}
              />
            ))}
            <p></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
