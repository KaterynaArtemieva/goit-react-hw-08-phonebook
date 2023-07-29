import styled from 'styled-components';

export const ButtonAddSt = styled.button`
  display: block;
  box-sizing: border-box;
  width: 288px;
  height: 40px;
  margin: 20px auto 0px;
  color: rgb(255, 255, 255);
  background: rgb(76, 198, 245);
  border: 1px solid rgb(197, 197, 197);
  border-radius: 6px;
  // order: 1;
  // align-self: stretch;
  cursor: pointer;
  border-radius: 50px;
  background: #656ed3;
  &:hover,
  &:focus {
    border: 1px solid #656ed3;
    background: #ebefff;
    color: #656ed3;
  }
`;

export const ButtonDelSt = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: transparent;
  border: none;
  order: 1;
  align-self: stretch;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonLogOutSt = styled.button`
  position: absolute;
  bottom: 34px;
  left: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  color: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 137%;
  background: none;
  border: none;
  align-self: stretch;
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;
