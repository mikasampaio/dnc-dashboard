import styled from 'styled-components'

export type ButtonProps = {
  severity: 'danger' | 'warning' | 'info' | 'primary'
}

const colors = {
  primary: '#0C70F2',
  danger: '#E80000',
  warning: '#FFA500',
  info: '#008d3d',
}

export const Button = styled.button<ButtonProps>`
  color: #ffffff;
  background: ${(props) => colors[props.severity || 'primary']};

  border-radius: 0.5rem;
  outline: none;
  border: none;

  padding: 0.75rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: opacity 0.2s ease-in-out;
  width: 100%;
  max-width: 550px;

  &:hover {
    opacity: 0.8;
  }
`
