import React from 'react';
import ProgressiveImage from '../../../components/img/ProgressiveImage/ProgressiveImage';
import { 
  ProductPreviewStyled, 
  ProductPreviewTitle, 
  ProductPreviewLink, 
  ProductPreviewImgWrapper, 
  ProductPreviewPrice, 
} from './ProductPreviewStyled';

const ProductPreview = (props) => {

  const { id, src, title, price } = props;

  return (
    <ProductPreviewStyled id={id}>
      <ProductPreviewLink href={`${'/product/'}`+ id}>
        <ProductPreviewImgWrapper>
          <ProgressiveImage src={src} overlaySrc={src} alt={title}/>
        </ProductPreviewImgWrapper>
        <div>
          <ProductPreviewTitle>{title}</ProductPreviewTitle>
          <ProductPreviewPrice>${price}</ProductPreviewPrice>
        </div>
      </ProductPreviewLink>
    </ProductPreviewStyled>
  );
}

export default ProductPreview;