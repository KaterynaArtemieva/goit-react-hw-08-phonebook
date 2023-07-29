import styled from 'styled-components';

export const FormSt = styled.form`
display: block;
  width: 334px;
  height: 100%;
  margin: auto;
  padding-bottom: 20px;

  font-family: 'Roboto';
  background: #AFB3FF;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
  z-index: 1;
`;

export const LabelSt = styled.label`
display: block;
width: 288px;
margin: 0 auto;
padding: 20px 0;
font-weight: 400;
font-size: 18px;
line-height: 14px;

color: #575b5f;

order: 0;
align-self: stretch;
flex-grow: 0;
`;

export const InputSt = styled.input`
display: block;
box-sizing: border-box;
width: 288px;
height: 40px;
margin-top: 20px;
cursor: text;
border-radius: 50px;
border: 1px solid #656ED3;
background: #EBEFFF;
padding-left: 20px;
outline: none;
`;
