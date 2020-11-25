import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper';

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
    images,
    title,
    price,
    material,
    sizeTable,
    onClick,
  } = props;

  SwiperCore.use([Thumbs]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imagesArr = images.map((img, index) => (
    <SwiperSlide key={index}>
      <img src={img} alt={title} />
    </SwiperSlide>
  ));

  return (
    <ProductDetailsStyled id={id}>
      <ProductDetailsContainer>
        <ProductDetailsBlock>
          <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            { imagesArr }
          </Swiper>
          <Swiper
            onSwiper={ setThumbsSwiper }
            watchSlidesVisibility
            watchSlidesProgress
          >
            { imagesArr }
          </Swiper>
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