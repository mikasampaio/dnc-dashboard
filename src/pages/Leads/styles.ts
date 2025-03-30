import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #060b26;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  padding: 1.5rem;

  color: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #0f1535;
  color: #fff;
  border: 1px solid #21497d;
  border-radius: 0.5rem;

  width: 50%;
  padding: 2rem;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
