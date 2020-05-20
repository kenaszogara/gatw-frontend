import styled from 'styled-components'

export const ButtonOutlined = styled.div`
  transition: 0.4s ease;

  border: 1px solid black;

  margin-top: 10px;
  padding: 0.4em 2em;
  font-size: 14px;

  font-family: 'Poppins';
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;


  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
    
    a {
      color: white;
    }
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