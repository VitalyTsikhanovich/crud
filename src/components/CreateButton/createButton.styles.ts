import styled from "styled-components";


export const Button = styled.button`
 
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #007bff;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #47a2fa;
  }
  @media (max-width: 576px) {
    .add-button {
      width: 20px;
      height: 20px;
      font-size: 10px;
    }
  }
`;
