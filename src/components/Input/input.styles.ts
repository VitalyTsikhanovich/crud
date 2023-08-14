import styled from "styled-components";



export const InputContainer = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: none; 
  border-bottom: 1px solid black; 
  outline: none; 

  font-size: 1rem;
  white-space: pre-wrap;
  &:focus {
    border-color: #1976d2;
  }
  
`;
export const InputLabel = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1rem;
`;
