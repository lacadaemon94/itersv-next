import localFont from 'next/font/local';

export const Ubuntu = localFont({
    src: [
      {
        path: './Ubuntu-Light.woff2',
        weight: '300',
        style: 'normal',
      },
      {
        path: './Ubuntu-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: './Ubuntu-Medium.woff2',
        weight: '600',
        style: 'normal',
      },
      {
        path: './Ubuntu-Bold.woff2',
        weight: '800',
        style: 'normal',
      },
    ],
    display: 'swap',
    variable: '--font-sans-serif',
    preload: true,
  });

export default Ubuntu;