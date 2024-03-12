"use client";

import React, { useState } from "react";
import WordInput from "./WordInput";
import WordList from "./WordList";

const App: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);

  const addWord = (word: string) => {
    setWords((prevWords) => [...prevWords, word]);
  };

  return (
    <div>
      <h1>単語リスト</h1>
      <WordInput onAddWord={addWord} />
      <WordList words={words} />
    </div>
  );
};

export default App;
