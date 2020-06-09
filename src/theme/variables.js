import './fonts.css';

export const colorVariables = {
  white: 'white',
  black: 'black',
  black_50: 'rgba(0, 0, 0, .5)',
  white_50: 'rgba(255, 255, 255, .5)',
  main: '#1f1f1f', // grey
  main_dark: '#242424', // dark grey
  accent: '#e90006', // red
  second: '#0033ff', // blue
  unusual: '#e6007e', // pink
  boxShadowSecond: '14px 18px 60px -1px rgba(0,51,255,0.8);', // blueshadows
  boxShadowAccent: '14px 18px 60px -1px rgba(233,0,8,1);', // redshadows
  transparent: 'transparent',
};

export const fontVariables = {
  primary: 'Lato, sans-serif',
};

export const sizeVariables = {
  xxs: { size: '11px', spacing: '0px' },
  xs: { size: '12px', spacing: '-0.2px' },
  s: { size: '13px', spacing: '-0.4px' },
  m: { size: '14px', spacing: '-0.4px' },
  l: { size: '16px', spacing: '-0.6px' },
  l2: { size: '18px', spacing: '-0.8px' },
  xl: { size: '20px', spacing: '-1px' },
  xxl: { size: '24px', spacing: '-1px' },
  xxxl: { size: '32px', spacing: '-1.8px' },
};

const mediaSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '540px',
  tabletM: '600px',
  tablet: '768px',
  tabletL: '992px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
  desktopL: '2560px',
};

export const device = {
  mobileS: `@media screen and (max-width: ${mediaSize.mobileS})`,
  mobileM: `@media screen and (max-width: ${mediaSize.mobileM})`,
  mobileL: `@media screen and (max-width: ${mediaSize.mobileL})`,
  tabletS: `@media screen and (max-width: ${mediaSize.tabletS})`,
  tabletM: `@media screen and (max-width: ${mediaSize.tabletM})`,
  tablet: `@media screen and (max-width: ${mediaSize.tablet})`,
  tabletL: `@media screen and (max-width: ${mediaSize.tabletL})`,
  laptop: `@media screen and (max-width: ${mediaSize.laptop})`,
  laptopL: `@media screen and (max-width: ${mediaSize.laptopL})`,
  desktop: `@media screen and (max-width: ${mediaSize.desktop})`,
  desktopL: `@media screen and (max-width: ${mediaSize.desktopL})`,
};