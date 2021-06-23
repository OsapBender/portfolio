import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'Context/ThemeContext';
import { IThemeProps } from 'Types/theme';

// {
//   isConsoleUnderscore: boolean;
//   isLight: boolean;
// }
const ConsoleUnderscore = styled.div<
  IThemeProps & { isConsoleUnderscore: boolean }
>`
  display: inline-block;
  position: relative;
  left: 10px;
  width: 20px;
  height: 3px;
  background: #000;
  ${(props) => (props.isConsoleUnderscore ? 'opacity: 1;' : 'opacity: 0;')}
  ${(props) => (props.isLight ? 'background: #000;' : 'background: #fff;')}
`;
export default (): JSX.Element => {
  const [isConsoleUnderscore, setConsoleUnderscore] = useState<boolean>(true);
  const { isLight } = useContext(ThemeContext);

  useEffect(() => {
    const timeoutConsoleUnderscore = setTimeout(
      () => setConsoleUnderscore(!isConsoleUnderscore),
      800,
    );
    return () => {
      clearTimeout(timeoutConsoleUnderscore);
    };
  }, [isConsoleUnderscore]);

  return (
    <ConsoleUnderscore
      isLight={isLight}
      isConsoleUnderscore={isConsoleUnderscore}
    />
  );
};
