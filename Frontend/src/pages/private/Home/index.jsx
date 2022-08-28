import React from "react";
import S from "./home.style";
import quotes from "./quotes";

const Home = () => {
  return (
    <S.Container>
      {quotes.map((el) => {
        const { quote, author } = el;
        return (
          <S.Card>
            <p>{quote}</p>
            <span>{author}</span>
          </S.Card>
        );
      })}
    </S.Container>
  );
};

export default Home;
