import React, { useState, useEffect } from 'react';
import { ProgresItem, Progress, Title, Value } from './ProgressBar.styled';

const createData = (title, value, id) => {
  return { title, value, id };
};

const items = [
  createData('Lekcja 3: Strategia UX', 41, 1),
  createData('Lekcja 1: Wprowadzenie', 33, 2),
  createData('Lekcja 7: Metody badawcze i.', 20, 3),
  createData('Pozostałe', 6, 4),
];

const ProgressBar = () => {
  const [progress, setProgress] = useState(items);

  useEffect(() => {
    setProgress(items);
  }, []);

  return (
    <>
      {progress.map(item => (
        <ProgresItem key={item.id}>
          <label htmlFor={item.id}>
            <Value>{item.value}% </Value> <Title> · {item.title}</Title>
          </label>
          <Progress id={item.id} value={item.value} max={100} />
        </ProgresItem>
      ))}
    </>
  );
};

export default ProgressBar;
