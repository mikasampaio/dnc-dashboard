import styled from 'styled-components'

export const Input = styled.input`
  color: #ffffff;
  background: #0f1535;
  border: 1px solid #21497d;
  border-radius: 0.5rem;
  outline: none;
  padding: 0.75rem;
  width: 100%;
  max-width: 550px;

  &::placeholder {
    color: rgb(255, 255, 255, 0.6);
  }

  &:disabled {
    background: rgb(255, 255, 255, 0.1);
  }
`
