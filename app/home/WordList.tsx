// WordList.tsx
import React from "react";
import { WordCard } from "./page";

interface WordListProps {
  wordCard1: WordCard[];
}

const WordList: React.FC<WordListProps> = ({ wordCard1 }) => (
  <ul>
    {wordCard1.map((wordCard, index) => (
      <div key={index} className="">
        <li>{wordCard.word}</li>
        <li>{wordCard.meaning}</li>
      </div>
    ))}
  </ul>
);

export default WordList;
