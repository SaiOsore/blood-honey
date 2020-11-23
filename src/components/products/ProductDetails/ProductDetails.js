import React from 'react';
import { 
  ProductDetailsStyled,
  ProductDetailsContainer,
  ProductDetailsBlock,
  ImgWrapper,
  Img,
  Title,
  SubTitle,
  MainInfo,
  Details,
  Price,
  ProductDetailsButton,
  SizeTableImg,
} from './ProductDetailsStyled';

const ProductDetails = (props) => {
  const {
    id,
    src,
    title,
    price,
    material,
    sizeTable,
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
          <MainInfo>
            <Title>{title}</Title>
            <Price>${price}</Price>
            <ProductDetailsButton
              onClick={onClick}
              children={'Add to Card'}
            />
          </MainInfo>
          <Details>
            {
              material &&
              <SubTitle>
                Material: <span>{material}</span>
              </SubTitle>
            }
            {
              sizeTable &&
              <>
                <SubTitle>
                  Size table:
                </SubTitle>
                <SizeTableImg src={sizeTable} alt='size table' />
              </>
            }
          </Details>
        </ProductDetailsBlock>
      </ProductDetailsContainer>
    </ProductDetailsStyled>
  );
}

export default ProductDetails;