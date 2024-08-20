"use client";

import { useState } from "react";

export default function Keyword() {
  const [text, setText] = useState<string>("");
  const [character, setCharacter] = useState<number>(0);
  const [paragraph, setParagraph] = useState<number>(0);
  const [word, setWord] = useState<number>(0);
  const [space, setSpace] = useState<number>(0);
  const [stopwords, setStopwords] = useState<string[]>([]);
  const [stopword, setStopword] = useState<string>("");
  const [allwords, setAllwords] = useState<
    Array<{
      word: string;
      quantity: number;
      percentage: number;
    }>
  >([]);
  const [keywords, setKeywords] = useState<
    Array<{
      word: string;
      quantity: number;
      percentage: number;
    }>
  >([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);

  const getResult = (text: string) => {
    setCharacter(text.split("").filter((cha) => cha !== " ").length);
    setWord(text.split(" ").length);
    setSpace(text.split(" ").length - 1);
    setParagraph(text.split(/\n/g).length);
    const words = Array.from(
      new Set(
        text
          .replaceAll(/\W/g, " ")
          .split(" ")
          .filter((val) => val !== "")
      )
    );
    const wordsQuantity = words.map((word) => {
      return text
        .replaceAll(/\W/g, " ")
        .split(" ")
        .filter((val) => val !== "")
        .filter((v) => v === word).length;
    });
    const wordsQuantitySum = wordsQuantity.reduce(
      (total, value) => total + value
    );
    const wordsPercentage = wordsQuantity.map((qua) => {
      return Math.ceil((qua / wordsQuantitySum) * 10000) / 100;
    });

    const unsortedWords = words.map((word, index) => {
      return {
        word,
        quantity: wordsQuantity[index],
        percentage: wordsPercentage[index],
      };
    });

    const sortedWords = unsortedWords.sort((a, b) => b.quantity - a.quantity);
    setAllwords(sortedWords);

    setKeywords(
      sortedWords
        .filter((keyword) => !stopwords.includes(keyword.word))
        .filter((_, idx) => idx < 20)
    );

    setEndTime(Date.now());
  };

  return (
    <div>
      <textarea
        rows={10}
        cols={80}
        value={text}
        onChange={(e) => {
          setStartTime(Date.now());
          setText(e.target.value);
          getResult(e.target.value);
        }}
      ></textarea>
      <div>
        <div>Characters: {character}</div>
        <div>Paragraphs: {paragraph}</div>
        <div>Words: {word}</div>
        <div>Spaces: {space}</div>
        <div>Reading Time: {endTime - startTime}ms</div>
      </div>
      <div>
        <label htmlFor="editStopword">Edit Stopword: </label>
        <select onChange={(e) => setStopword(e.target.value)}>
          {stopwords.map((stopword) => (
            <option key={stopword} value={stopword}>
              {stopword}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setStopwords(stopwords.filter((val) => val !== stopword));
            if (
              allwords.filter((word) => word.word === stopword).length &&
              allwords.findIndex((word) => word.word === stopword) <
                allwords.findIndex((word) => word.word === keywords[19].word)
            ) {
              setKeywords(
                [
                  ...keywords.filter((_, idx) => idx !== 19),
                  allwords.filter((word) => word.word === stopword)[0],
                ].sort((a, b) => b.quantity - a.quantity)
              );
            }
          }}
        >
          Delete
        </button>
      </div>
      <div>
        <label htmlFor="addStopword">Add Stopword: </label>
        <input
          type="text"
          value={stopword}
          onChange={(e) => setStopword(e.target.value)}
        />
        <button
          onClick={() => {
            if (!stopwords.filter((val) => val === stopword).length) {
              setStopwords([...stopwords, stopword]);
              if (keywords.filter((word) => word.word === stopword).length) {
                setKeywords([
                  ...keywords.filter((keyword) => keyword.word !== stopword),
                  allwords.filter(
                    (keyword) => !stopwords.includes(keyword.word)
                  )[20],
                ]);
              }
            }
          }}
        >
          Add
        </button>
      </div>
      <div>
        <h3>Keywords</h3>
        <table>
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Quantity</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((keyword) => (
              <tr key={keyword.word}>
                <td>{keyword.word}</td>
                <td>{keyword.quantity}</td>
                <td>{keyword.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
