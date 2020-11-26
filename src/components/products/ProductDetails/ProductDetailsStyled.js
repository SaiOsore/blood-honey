import styled from 'styled-components';
import { colorVariables, sizeVariables, device } from '../../../theme/variables';
import Button from '../../buttons/Button';

export const ProductDetailsStyled = styled.div`
  padding: 2rem 0;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  };
`;

export const ProductDetailsBlock = styled.div`
  width: 50%;
  padding: 20px;
  ${device.tablet} {
    text-align: center;
    width: 100%;
  };

  & .swiper-container {
    &:first-child {
      width: 50%;
      height: auto;
      margin-bottom: 20px;
    }
    width: 50%;
  }
  & .swiper-slide {
    width: 100%;
  }
  & .swiper-slide img {
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  max-width: 200px;
  margin: 0 auto;
  &:before, &:after {
    content: '';
    background: black;
    position: absolute;
    height: 20px;
    width: 100%;
  }
  &:before {
    top: -20px;
    left: 0;
  }
  &:after {
    bottom: -18px;
    left: 0;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: ${sizeVariables.xxl.size};
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  font-size: ${sizeVariables.l2.size};
  margin-bottom: 20px;
`;

export const MainInfo = styled.div`
  margin-bottom: 50px;
`;

export const Details = styled.div`
  margin-bottom: 50px;
`;

export const Price = styled.p`
  font-size: ${sizeVariables.xl.size};
  margin-bottom: 20px;
`;

export const ProductDetailsButton = styled(Button)`
  display: block;
  font-size: ${sizeVariables.xl.size};
  color: ${colorVariables.white};
  background-color: ${colorVariables.main_dark};
  border: 2px solid ${colorVariables.black};
  padding: 5px 10px;
  max-width: 280px;
  width: 100%;
  height: 48px;
  ${device.tablet} {
    margin: 0 auto;
  };
`;

export const SizeTableImg = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
`;