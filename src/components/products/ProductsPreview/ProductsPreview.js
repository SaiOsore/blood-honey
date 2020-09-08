import React from 'react';
import ProductPreview from '../ProductPreview/ProductPreview';
import { ProductsPreviewStyled } from './ProductsPreviewStyled';

const ProductsPreview = ({products}) => {

  const mapProducts = products.map((product, index) => (
    <ProductPreview 
      key={index+product.id}
      id={product.id}
      src={product.src}
      title={product.title}
      price={product.price}
      colors={product.colors}
    />
  ));

  return (
    <ProductsPreviewStyled>
      {mapProducts}
    </ProductsPreviewStyled>
  );
}

export default ProductsPreview;