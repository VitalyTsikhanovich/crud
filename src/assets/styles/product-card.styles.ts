import styled from "styled-components";

export const ProductCardContainer = styled.div`
  //display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  max-width: 50%;
  align-items: center;

  @media (min-width: 576px) {
    max-width: 400px;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
  }
`;

export const ProductImage = styled.div`
  flex: 0 0 100px;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 8px;
  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

export const ProductImageElement = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  
  @media (max-width: 576px) {
    max-width: 150px;
    max-height: 150px;
    object-fit: contain;
    
  }
`;

export const ProductDetails = styled.div`
  flex: 1;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

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
`;

export const DescriptionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #007bff;
`;
