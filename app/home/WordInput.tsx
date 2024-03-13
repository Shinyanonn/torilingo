// WordInput.tsx
import React, { useState, ChangeEvent } from "react";
import { WordCard } from "./page";

interface WordInputProps {
  onAddWord: (word: WordCard) => void;
}

const WordInput: React.FC<WordInputProps> = ({ onAddWord }) => {
  const [word, setWord] = useState<string>("");
  const [meaning, setMeaning] = useState<string>("");

  const handleAddWord = () => {
    const w: WordCard = {
      word: word,
      meaning: meaning,
    };

    onAddWord(w);
    setWord("");
    setMeaning("");
  };

  return (
    <div>
      <input
        type="text"
        className="p-3 border border-black m-5"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <input
        type="text"
        className="p-3 border border-black m-5"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
      />
      <button onClick={handleAddWord}>単語を追加</button>
    </div>
  );
};

export default WordInput;
