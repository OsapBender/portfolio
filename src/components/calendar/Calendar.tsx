import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'Context/ThemeContext';
import { Light, Orange, Red, TextColor } from 'Assets/styles/colors';
import { IThemeProps } from 'Types/theme';

const Grid = styled.div<IThemeProps>`
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  width: 100%;

  div:nth-child(odd) {
    border-left: 1px solid ${(props) => (props.isLight ? TextColor : Light)};
  }

  div:nth-child(even) {
    border-left: 1px solid ${(props) => (props.isLight ? TextColor : Light)};
  }

  div:nth-child(5n) {
    border-right: 1px solid ${(props) => (props.isLight ? TextColor : Light)};
  }

  div:nth-last-child(-n + 5) {
    border-bottom: 1px solid ${(props) => (props.isLight ? TextColor : Light)};
  }

  div {
    border-top: 1px solid;
    border-color: ${(props) => (props.isLight ? TextColor : Light)};
  }
`;

const Footnote = styled.span`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

const GridItem = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;

  ${(props: { isFilled: boolean; is2020: boolean }) => {
    if (props.is2020) {
      return `background: ${Orange};`;
    } else if (props.isFilled) {
      return `background: ${Red};`;
    } else {
      return 'background: transparent;';
    }
  }}
`;

const year = 2000;
const currentYear = new Date().getFullYear();
console.log(currentYear);

const Calendar = (): JSX.Element => {
  const { isLight } = useContext(ThemeContext);
  const grid: number[] = [];
  for (let i = 0; i < 70; i++) {
    grid.push(i);
  }

  return (
    <div>
      <h3>Каждый заполненный квадрат - ачивка за прожитый год.</h3>
      <Footnote>*Оранжевым квадратом выделен 2020 год.</Footnote>
      <Grid isLight={isLight}>
        {grid.map((_item, idx) => {
          return (
            <GridItem
              isFilled={currentYear - year > idx}
              is2020={idx === 19}
              key={idx}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Calendar;
