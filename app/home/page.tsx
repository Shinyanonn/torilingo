"use client";

import React, { useState } from "react";
import WordInput from "./WordInput";
import WordList from "./WordList";

export interface WordCard {
  word: string;
  meaning: string;
}

const App: React.FC = () => {
  const [wordCards, setWordCards] = useState<WordCard[]>([]);

  const addWord = (wordCard: WordCard) => {
    console.log(wordCard);
    console.log(wordCards);
    setWordCards((prevWordCards) => [...prevWordCards, wordCard]);
  };

  return (
    <div>
      <h1>単語リスト</h1>
      <WordInput onAddWord={addWord} />
      <WordList wordCard1={wordCards} />
    </div>
  );
};

export default App;
