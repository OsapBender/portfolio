import React, { useState, useEffect, useContext } from 'react';
import ConsoleUnderscore from './ConsoleUnderscore';
import styled from 'styled-components';
import { ThemeContext } from 'Context/ThemeContext';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 200px;
  max-width: 768px;
  margin: 0 auto;

  span {
    font-size: 2.5rem;
    display: block;
    text-align: center;
    font-family: 'Turret Road', cursive;
    ${(props) => (props.isLight ? 'color: #000;' : 'color: #fff;')}
  }

  @media (max-width: 500px) {
    min-height: 150px;
    span {
      font-size: 2rem;
    }
  }

  @media (max-width: 400px) {
    min-height: 125px;
    span {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 350px) {
    span {
      font-size: 1rem;
    }
    min-height: 100px;
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Terminal = (props) => {
  const { words } = props;
  const [curWord, setCurWord] = useState('');
  const [count, setCount] = useState(0); // для пробежки по буквам
  const [index, setIndex] = useState(0); // для пробежки по словам в массиве
  const [isRemove, setRemove] = useState(false);
  const [ms, setMs] = useState();

  const { isLight } = useContext(ThemeContext);

  useEffect(() => {
    if (words[index].length < 20) {
      setMs(300);
    } else {
      setMs(100);
    }

    let removeTimer;
    const timeoutRender = setTimeout(() => {
      // смотрим на флаг, который показывает нужно удалять слово или нет
      if (isRemove) {
        if (count === -1) {
          // если удалили слово, то меняем флаг
          setRemove(false);
          return false;
        }
        // удаляем по букве
        setCount(count - 1);
        const newWord = curWord.split('').splice(0, count).join('');
        setCurWord(newWord);
      } else {
        if (count === words[index].length) {
          removeTimer = setTimeout(() => setRemove(true), 1000);
        } else {
          if (count === -1) {
            // если в массиве существует следующее слово, то рендерим его
            if (words[index + 1]) {
              setIndex(index + 1);
            } else {
              // если нет, то начинаем рендер с первого слова
              setIndex(0);
            }
            // устанавливаем count на 0 потому что иначе он будет равняться -1
            // и соотвественно words[-1] === undefined
            return setCount(0);
          } else {
            setCount(count + 1);
          }
          setCurWord(curWord + words[index][count]);
        }
      }
    }, ms);

    return () => {
      clearTimeout(timeoutRender);
      if (removeTimer) clearTimeout(removeTimer);
    };
  }, [curWord, words, count, index, isRemove, ms]);

  return (
    <Wrapper isLight={isLight}>
      <span>
        {curWord}
        <ConsoleUnderscore />
      </span>
    </Wrapper>
  );
};

export default Terminal;
