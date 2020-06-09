import React from 'react';
import ProgressiveImage from '../../../components/img/ProgressiveImage/ProgressiveImage';
import { ProductPreviewStyled, ProductPreviewLink, ProductPreviewImgWrapper } from './ProductPreviewStyled';

const ProductPreview = ({id, src, title, price, sizes, onClick}) => {
  let SizesItems = (typeof sizes === 'object') ?
    (
      sizes.map((size, index) => (
        <span key={index}>
          <label htmlFor={size + id}>{size}</label>
          <input type='radio' id={size + id} name="sizes"/>
        </span>
      ))
    ) :
    (
      <>
        <label htmlFor={sizes + id}>{sizes}</label>
        <input type='checkbox' id={sizes + id}/>
      </>
    )
  return (
    <ProductPreviewStyled id={id}>
      <ProductPreviewLink href={`${'/product/'}`+ id}>
        <ProductPreviewImgWrapper>
          <ProgressiveImage src={src} overlaySrc={src} alt={title}/>
        </ProductPreviewImgWrapper>
      </ProductPreviewLink>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <div>{SizesItems}</div>
        </div>
        <button onClick={onClick}> Add to Cart </button>
    </ProductPreviewStyled>
  );
}

export default ProductPreview;