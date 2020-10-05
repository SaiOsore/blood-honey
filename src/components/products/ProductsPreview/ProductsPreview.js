import React from 'react';
import ProductPreview from '../ProductPreview/ProductPreview';
import { ProductsPreviewStyled } from './ProductsPreviewStyled';

const ProductsPreview = ({products}) => {

  const mapProducts = products.map((product, index) => (
    <ProductPreview 
      key={product.size + product.id}
      id={product.id}
      src={product.src}
      title={product.title}
      price={product.price}
      color={product.color}
      size={product.size}
    />
  ));

  return (
    <ProductsPreviewStyled>
      {mapProducts}
    </ProductsPreviewStyled>
  );
}

export default ProductsPreview;