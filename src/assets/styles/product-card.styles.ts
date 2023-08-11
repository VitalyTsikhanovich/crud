import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  width: 500px;
  min-height: 150px;
  align-items: center;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;


  @media (min-width: 576px) {
    max-width: 400px;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }

  &:hover {

    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 0 8px rgb(0, 123, 255);
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
  padding-right: 10px;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 8px;
  cursor: pointer;
  word-break: break-all;
  &:hover{
    //box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 0 8px rgb(0, 123, 255);
    color: rgb(0, 123, 255);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2)
  }
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  max-width: 50px;

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
  word-break: break-all;
`;

export const DescriptionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #007bff;
`;
