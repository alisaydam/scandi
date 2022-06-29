import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-gap: 100px 40px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

export const ProductCard = styled.div`
  padding: 16px;
  max-width: 386px;
`;

export const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 25px;
`;

export const ProductName = styled.h2`
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  font-style: normal;
`;

export const ProductPrice = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
`;
