import styled from "styled-components";

export const DescriptionContainer = styled.div`
  position: relative;
  max-height: 100%;
  //overflow: hidden;
  transition: max-height 0.9s ease;
  @media (max-width: 576px) {
    max-height: none;
  }
`;

export const DescriptionText = styled.p`
  margin: 0;
  word-break: break-all;
`;


export const DescriptionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #007bff;
`;
