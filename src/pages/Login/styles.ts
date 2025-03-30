import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #060b26;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const ContainerForm = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem;
  width: 50%;
  color: #ffffff;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    height: 70%;
  }
`

export const ContainerImage = styled.section`
  background-image: url(/login.svg);
  background-size: cover;
  width: 50%;

  @media screen and (max-width: 768px) {
    background-position: bottom;
    width: 100%;
    height: 30%;
  }
`

export const Title = styled.h1`
  color: #ffffff;
  font-weight: 700;
  font-size: 1.5rem;
`

export const Link = styled.a`
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`
