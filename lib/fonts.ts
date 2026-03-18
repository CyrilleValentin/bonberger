import localFont from 'next/font/local';

    

export const poppins = localFont({
  src: [
  
    {
      path: '../fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
});


// export const NunitoSans = localFont({
//   src: [
//     {
//       path: '../fonts/NunitoSans-ExtraLight.ttf',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/NunitoSans-Light.ttf',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/NunitoSans-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
   
//     {
//       path: '../fonts/NunitoSans-SemiBold.ttf',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/NunitoSans-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-nunito-sans',
//   display: 'swap',
// });