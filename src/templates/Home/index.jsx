import { useState } from "react";

import "./style.css";

import { InputSearch } from "../../components/InputSearch";
import { RelatedKeyword } from "../../components/RelatedKeyword";
import logo from "../../assets/avatar.png";

export const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [relatedKeywords, setRelatedKeywords] = useState([]);

  const handleOnSearchSubmit = (value) => {
    setKeyword(value);
    setRelatedKeywords([
      {
        keyword: "Keyword 1",
        trend: 80,
        uses: 20,
      },
      { keyword: "Keyword 2", trend: 75, uses: 15 },
      { keyword: "Keyword 3", trend: 50, uses: 10 },
      { keyword: "Keyword 4", trend: 20, uses: 5 },
      { keyword: "Keyword 5", trend: 5, uses: 2 },
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
                uses={relatedKeyword.uses}
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
