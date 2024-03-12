// WordInput.tsx
import React, { useState, ChangeEvent } from "react";

interface WordInputProps {
  onAddWord: (word: string) => void;
}

const WordInput: React.FC<WordInputProps> = ({ onAddWord }) => {
  const [word, setWord] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleAddWord = () => {
    if (word.trim() !== "") {
      onAddWord(word.trim());
      setWord("");
    }
  };

  return (
    <div>
      <input type="text" value={word} onChange={handleInputChange} />
      <button onClick={handleAddWord}>単語を追加</button>
    </div>
  );
};

export default WordInput;
