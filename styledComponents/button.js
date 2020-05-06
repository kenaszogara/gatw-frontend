import styled from 'styled-components'

export const ButtonOutlined = styled.div`
  transition: 0.4s ease;

  border: 1px solid black;
  padding: 0.5em 2em;

  font-family: 'Poppins';
  font-weight: 800;
  font-size: 1.2em;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  margin-top: 0.8em;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`

export const ButtonRounded = styled.div`
  transition: 0.4s ease;

  border-radius: 1.3em;
  background-color: #C4C4C4;
  color: black;

  padding: 0.3em 0.8em;
  margin: 0.3em;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`