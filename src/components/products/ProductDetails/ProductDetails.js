import React from 'react';
import { 
  ProductDetailsStyled,
  ProductDetailsContainer,
  ProductDetailsBlock,
  ImgWrapper,
  Img,
  Title,
  Details,
  Price,
  ProductDetailsButton,
} from './ProductDetailsStyled';

const ProductDetails = (props) => {
  const {
    id,
    src,
    title,
    price,
    onClick,
  } = props;

  return (
    <ProductDetailsStyled id={id}>
      <ProductDetailsContainer>
        <ProductDetailsBlock>
          <ImgWrapper>
            <Img src={src} alt={title} />
          </ImgWrapper>
        </ProductDetailsBlock>
        <ProductDetailsBlock>
          <Title>{title}</Title>
          <Details>
            <Price>${price}</Price>
            <ProductDetailsButton
              onClick={onClick}
              children={'Add to Card'}
            />
          </Details>
        </ProductDetailsBlock>
      </ProductDetailsContainer>
    </ProductDetailsStyled>
  );
}

export default ProductDetails;