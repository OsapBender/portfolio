import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Terminal from 'Components/termainal/Terminal';
import { ThemeContext } from 'Context/ThemeContext';
import { IThemeProps } from 'Types/theme';
import { TextColor } from 'Assets/styles/colors';
import logoTOne from 'Assets/images/logo_t_one.svg';

const Container = styled.section`
  display: flex;
  margin-bottom: 50px;

  @media (max-width: 1280px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 500px;
  max-width: 500px;
  max-height: 500px;
  min-height: 150px;
  margin-bottom: 40px;
  border-radius: 10px;
  background: #000;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  &:hover > div {
    opacity: 0.75;
  }
`;

const ImageOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fff;
  transition: 0.3s;
`;

const Image = styled.img`
  object-fit: cover;
  width: ${(props) => props.width};
  border-radius: 10px;
`;

const TextContainer = styled.div<IThemeProps>`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  h2 {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 3rem;
  }

  @media (max-width: 1280px) {
    margin-left: 0;

    h2 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
  ${(props) => props.isLight && 'color: rgb(242,242,242);'}
`;

const LinkTitle = styled.a<IThemeProps>`
  color: #000;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    ${(props) => (props.isLight ? 'color: #d04000;' : 'color: #3a8cc8;')}
  }

  ${(props) =>
    props.isLight ? `color: ${TextColor}` : 'color: rgb(242,242,242)'};
`;

const DescriptionTop = styled.span<IThemeProps>`
  ${(props) =>
    props.isLight ? `color: ${TextColor}` : 'color: rgb(242,242,242)'};
`;

const DescriptionBottom = styled(DescriptionTop)``;

const sections: {
  src: string;
  alt: string;
  span: string;
  title: string;
  link: string;
  p: string;
  width: string;
}[] = [
  {
    src: 'https://sun1-24.userapi.com/s8K7YPwrGggOD-_aJ-wN4b316nI3YGxhRagGMA/NBUdjFAHk5Y.jpg',
    alt: 'HTC',
    span: '2020 - 2021',
    title: 'Центр Высоких Технологий',
    link: 'https://htc-cs.ru/',
    p:
      'Занимаюсь аутсорсингом сайтов и приложений для крупных Российских компаний. ' +
      'Основные задачи - верстка landing page, поддержка legacy проектов, ' +
      'собеседование кандидатов на должность d0-d1, проверка тестовых заданий.' +
      'Основной стэк работы - jQuery, Javascript, scss, pug, webpack, Figma',
    width: '100%',
  },
  {
    src: logoTOne,
    alt: 'T.One',
    span: '2021 - по настоящее время',
    title: 'T.One',
    link: 'https://boxt.one',
    p:
      'Занимаюсь развитием архитектуры веб-приложения на React и внедрение новых фич, исправлением багов. ' +
      'Параллельно развиваю мобильное приложение на React Native. ' +
      'Стэк технологий ReactReact Native, Redux (в веб-приложении), ' +
      'typescript, scss, styled-components, Figma, webpack',
    width: '50%',
  },
];

const PageMain = (): JSX.Element => {
  const [words] = useState([
    'Hello world!',
    'I`m Ivan Chuvashov. I`m 21 years old and I am a middle frontend developer.',
  ]);
  const { isLight } = useContext(ThemeContext);

  return (
    <>
      <Terminal words={words} />

      {sections.map((item) => {
        return (
          <Container key={item.title}>
            <ImageContainer>
              <ImageOverlay>
                <Image src={item.src} width={item.width} alt={item.alt} />
              </ImageOverlay>
            </ImageContainer>
            <TextContainer isLight={isLight}>
              <DescriptionTop isLight={isLight}>{item.span}</DescriptionTop>
              <h2>
                <LinkTitle href={item.link} isLight={isLight}>
                  {item.title}
                </LinkTitle>
              </h2>
              <DescriptionBottom isLight={isLight}>{item.p}</DescriptionBottom>
            </TextContainer>
          </Container>
        );
      })}
    </>
  );
};

export default PageMain;
