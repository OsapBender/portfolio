import React from 'react';
import Calendar from 'Components/calendar';

const Library = (): JSX.Element => {
  return (
    <div>
      <span>Стэк технологий, с которым я работаю: </span>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>React-native</li>
        <li>Redux</li>
        <li>HTML5\CSS\SCSS</li>
        <li>Webpack\Figma\Photoshop</li>
      </ul>
      <Calendar />
    </div>
  );
};

export default Library;
