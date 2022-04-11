import React, { useEffect, useState } from 'react';
import { Item, Progress, Title } from './RatingProgress.styled';

const createData = (title, value, id) => {
  return { title, value, id };
};

const items = [
  createData('5', 70, 1),
  createData('4', 65, 2),
  createData('3', 30, 3),
  createData('2', 5, 4),
  createData('1', 0, 5),
];

const RatingProgress = () => {
  const [progress, setProgress] = useState(items);

  useEffect(() => {
    setProgress(items);
  }, []);

  return (
    <>
      {progress.map(item => (
        <Item key={item.id}>
          <label for={item.id}>
            <Title>{item.title}</Title>
          </label>
          <Progress id={item.id} value={item.value} max={100} />
        </Item>
      ))}
    </>
  );
};

export default RatingProgress;
