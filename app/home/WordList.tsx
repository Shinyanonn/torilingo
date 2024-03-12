// WordList.tsx
import React from "react";

interface WordListProps {
  words: string[];
}

const WordList: React.FC<WordListProps> = ({ words }) => (
  <ul>
    {words.map((word, index) => (
      <li key={index}>{word}</li>
    ))}
  </ul>
);

export default WordList;
